from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
import json
import uuid
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from rest_framework import status
from .forms import CourseForm


with open('db.json', 'r') as data:
    json_object = json.load(data)
    courses = json_object['courses']


def update_file():
    open("db.json", "w").write(
        json.dumps(json_object, sort_keys=True, indent=4, separators=(',', ': '))
    )

def add_new_course(payload):
    f = CourseForm(payload)
    if not f.is_valid():
        return JsonResponse(data=json.loads(f.errors.as_json()))
    payload['id'] = str(uuid.uuid4())
    courses.append(payload)
    update_file()
    return JsonResponse({"status ": "Course Added Successfully"}, status=status.HTTP_201_CREATED)
def update_course(payload):
    for item in courses:
        if item['id'] == payload['id']:
            item['title'] = payload['title']
            item['description'] = payload['description']
            update_file()
            return JsonResponse({"status": "Edited successfully"}, status=status.HTTP_202_ACCEPTED)
    return JsonResponse({"error ": "Can't edit the course"}, status=status.HTTP_406_NOT_ACCEPTABLE)
def delete_course(payload):
    target_id = payload['id']
    print('Target', target_id)
    for i in range(len(courses)):
        if courses[i]['id'] == target_id:
            courses.pop(i)
            print(courses)
            update_file()
            return JsonResponse({"status": "deleted"}, status=status.HTTP_200_OK)
    return JsonResponse({"error": "Not deleted"}, status=status.HTTP_406_NOT_ACCEPTABLE)

class home(View):
    def get(self,request, *args, **kwargs):
        return JsonResponse(courses, safe=False)
    def post(self, request, *args, **kwargs):
        payload = json.loads(request.body)
        return add_new_course(payload)
    def put(self, request, *args, **kwargs):
        payload = json.loads(request.body)
        return update_course(payload)
    def delete(self, request, *args, **kwargs):
        payload = json.loads(request.body)
        return delete_course(payload)

class course(View):
    def get(self, request, *args, **kwargs):
        for item in courses:
            print(item['id'])
            if item['id'] == kwargs['id']:
                return JsonResponse(item,status=status.HTTP_200_OK)
        return JsonResponse({"error ": "Not found"},status=status.HTTP_404_NOT_FOUND)




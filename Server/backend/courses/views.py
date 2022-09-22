from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
import json
import uuid
from django.http import JsonResponse
from rest_framework import status
# Create your views here.

# def home(request):
#     return HttpResponse('<h1>Hello<h1/>')


with open('db.json', 'r') as data:
    json_object = json.load(data)
    courses = json_object['courses']


def update_file():
    open("db.json", "w").write(
        json.dumps(json_object, sort_keys=True, indent=4, separators=(',', ': '))
    )


class home(View):
    def get(self,request, *args, **kwargs):
        return JsonResponse(courses, safe=False)

class course(View):
    def get(self, request, *args, **kwargs):
        for item in courses:
            print(item['id'])
            if item['id'] == kwargs['id']:
                return JsonResponse(item,status=status.HTTP_200_OK)
        return JsonResponse({"error ": "Not found"},status=status.HTTP_404_NOT_FOUND)

class add_course(View):
    def post(self, request, *args, **kwargs):
        payload = json.loads(request.body)
        payload['id'] = str(uuid.uuid4())
        courses.append(payload)
        update_file()
        return JsonResponse({"status ": "Course Added Successfully"},status=status.HTTP_201_CREATED)

class update_course(View):
    def post(self, request, *args, **kwargs):
        payload = json.loads(request.body)
        for item in courses:
            if item['id'] == payload['id']:
                item['title']=payload['title']
                item['description'] = payload['description']
                update_file()
                return JsonResponse({"status": "Edited successfully"},status=status.HTTP_202_ACCEPTED)
        return JsonResponse({"error ": "Can't edit the course"},status=status.HTTP_406_NOT_ACCEPTABLE)

class delete_course(View):
    def delete(self, request, *args, **kwargs):
        payload = json.loads(request.body)
        target_id = payload['id']
        for i in range(len(courses)):
            if courses[i]['id'] == target_id:
                courses.pop(i)
                print(courses)
                update_file()
                return JsonResponse({"status": "deleted"},status=status.HTTP_200_OK)
        return JsonResponse({"error": "Not deleted"}, status=status.HTTP_406_NOT_ACCEPTABLE)


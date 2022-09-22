from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
import json
from django.http import JsonResponse

# Create your views here.

# def home(request):
#     return HttpResponse('<h1>Hello<h1/>')


with open('db.json', 'r') as data:
    json_object = json.load(data)
    courses = json_object['courses']
    print(courses)
    for item in courses:
        print(item)


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
                return JsonResponse(item)
        return JsonResponse({"error ": "Not found"})

class add_course(View):
    def post(self, request, *args, **kwargs):
        payload = json.loads(request.body)
        courses.append(payload)
        update_file()
        return JsonResponse({"error ": "Can't add the course"})

class update_course(View):
    def post(self, request, *args, **kwargs):
        payload = json.loads(request.body)
        for item in courses:
            if item['id'] == payload['id']:
                item['title']=payload['title']
                item['description'] = payload['description']
                update_file()
                return JsonResponse({"status": "Edited successfully"})
        return JsonResponse({"error ": "Can't edit the course"})

class delete_course(View):
    def delete(self, request, *args, **kwargs):
        payload = json.loads(request.body)
        target_id = payload['id']
        for i in range(len(courses)):
            if courses[i]['id'] == target_id:
                courses.pop(i)
                print(courses)
                break
        update_file()
        return JsonResponse({"error": "deleted"})


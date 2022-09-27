from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
import json
import uuid
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from rest_framework import status
from .forms import CourseForm
from .models import CourseModel
from django.core import serializers


def add_new_course(payload):
    f = CourseForm(payload)
    if not f.is_valid():
        return JsonResponse(data=json.loads(f.errors.as_json()))
    CourseModel.objects.create(**f.cleaned_data)
    return JsonResponse({"status ": "Course Added Successfully"}, status=status.HTTP_201_CREATED)


def update_course(payload):
    f = CourseForm(payload)
    if not f.is_valid():
        return JsonResponse(data=json.loads(f.errors.as_json()))
    CourseModel.objects.filter(id=payload['id']).update(**f.cleaned_data)
    return JsonResponse({"status ": "Course Edited Successfully"}, status=status.HTTP_201_CREATED)


def delete_course(payload):
    f = CourseForm(payload)
    if not f.is_valid():
        return JsonResponse(data=json.loads(f.errors.as_json()))
    CourseModel.objects.filter(id=payload['id']).delete()
    return JsonResponse({"status ": "Course Deleted Successfully"}, status=status.HTTP_201_CREATED)


def organize(payload):
    result = []
    for i in payload:
        result.append(i['fields'])
    return result


class home(View):
    def get(self, request, *args, **kwargs):
        users = CourseModel.objects.all()
        data = serializers.serialize('json', users, fields=("title", "description"))
        json_data = json.loads(data)
        final_json_data = organize(json_data)
        print(final_json_data)
        return JsonResponse(final_json_data, status=status.HTTP_201_CREATED, safe=False)

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
                return JsonResponse(item, status=status.HTTP_200_OK)
        return JsonResponse({"error ": "Not found"}, status=status.HTTP_404_NOT_FOUND)

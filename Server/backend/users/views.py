import json

from django.shortcuts import render
from rest_framework import status
from django.views import View
from django.http import JsonResponse
from .models import User as UserModel
from .forms import UserForm
from django.core import serializers

from django.shortcuts import get_object_or_404


def get_all_users():
    users = UserModel.objects.all()
    data = serializers.serialize('json', users, fields=("first_name", "last_name", "age"))
    json_data = json.loads(data)
    return JsonResponse(json_data, status=status.HTTP_201_CREATED, safe=False)


def add_new_user(payload):
    f = UserForm(payload)
    if not f.is_valid():
        return JsonResponse(data=json.loads(f.errors.as_json()))
    UserModel.objects.create(**f.cleaned_data)
    return JsonResponse({"status ": "User Added Successfully"}, status=status.HTTP_201_CREATED)


def update_user(payload):
    f = UserForm(payload)
    if not f.is_valid():
        return JsonResponse(data=json.loads(f.errors.as_json()))
    UserModel.objects.filter(id=payload['id']).update(**f.cleaned_data)
    return JsonResponse({"status ": "User Edited Successfully"}, status=status.HTTP_201_CREATED)


def delete_user(payload):
    f = UserForm(payload)
    if not f.is_valid():
        return JsonResponse(data=json.loads(f.errors.as_json()))
    UserModel.objects.filter(id=payload['id']).delete()
    return JsonResponse({"status ": "User Deleted Successfully"}, status=status.HTTP_201_CREATED)


def get_user_by_id(payload):
    f = UserForm(payload)
    if not f.is_valid():
        return JsonResponse(data=json.loads(f.errors.as_json()))
    users = None
    age = payload['age']
    if UserModel.objects.filter(age.__gt == age).exists():
        users = UserModel.objects.get(id=payload['id'])
    if users:
        return JsonResponse(users, status=status.HTTP_201_CREATED)
    return JsonResponse({"status ": "No user with the given ID"}, status=status.HTTP_404_NOT_FOUND)


def get_users_greater_than(payload):
    f = UserForm(payload)
    if not f.is_valid():
        return JsonResponse(data=json.loads(f.errors.as_json()))
    users = UserModel.objects.all()
    result = []
    for i in users:
        if i.age > payload['age']:
            serialized_user = serializers.serialize('json', [i, ])
            json_user = json.loads(serialized_user)[0]
            result.append(json_user['fields'])
    return JsonResponse(result, status=status.HTTP_404_NOT_FOUND, safe=False)


class Users(View):
    def get(self, request, *args, **kwargs):
        return get_all_users()

    def post(self, request, *args, **kwargs):
        payload = json.loads(request.body)
        return add_new_user(payload)

    def put(self, request, *args, **kwargs):
        payload = json.loads(request.body)
        return update_user(payload)

    def delete(self, request, *args, **kwargs):
        payload = json.loads(request.body)
        return delete_user(payload)


class User(View):
    def get(self, request, *args, **kwargs):
        payload = json.loads(request.body)
        print(payload)
        return get_user_by_id(payload)


class GetByAge(View):
    def get(self, request, *args, **kwargs):
        payload = json.loads(request.body)
        return get_users_greater_than(payload)

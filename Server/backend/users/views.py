from django.shortcuts import render

# Create your views here.
from django.views import View
from django.http import JsonResponse
from .models import User as UserModel


def get_all_users():
    return UserModel.objects.all()

def add_new_user():
    pass

class Home(View):
    def get(self, request, *args, **kwargs):
        data = get_all_users()
        return render(request, 'Users.html', {'data': data})


class User(View):
    pass


class AddUser(View):
    pass


class DeleteUser(View):
    pass


class GetUserByID(View):
    pass


class UpdateUser(View):
    pass

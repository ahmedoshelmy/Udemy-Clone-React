from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.home.as_view(), name='courses-home'),
    path('<str:id>', views.course.as_view(), name='courses-single'),
]
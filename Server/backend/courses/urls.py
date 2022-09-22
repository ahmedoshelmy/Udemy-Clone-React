from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.home.as_view(), name='courses-home'),
    path('add_course', views.add_course.as_view(), name='add-course'),
    path('delete_course', views.delete_course.as_view(), name='delete-course'),
    path('update_course', views.update_course.as_view(), name='update-course'),
    path('<str:id>', views.course.as_view(), name='courses-single'),
]
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.Users.as_view(), name='users-home'),
    path('<int:id>', views.User.as_view(), name='users-single'),
    path('age', views.GetByAge.as_view(), name='filter-age')
]

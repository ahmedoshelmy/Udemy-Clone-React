from django import forms

class UserForm(forms.Form):
    first_name = forms.CharField(max_length=20)
    last_name = forms.CharField(max_length=20)
    email = forms.EmailField()
    password = forms.CharField(max_length=20)
    age = forms.IntegerField()
    birth_date = forms.DateField()

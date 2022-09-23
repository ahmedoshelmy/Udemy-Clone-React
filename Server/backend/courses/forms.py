from django import forms

class CourseForm(forms.Form):
    description = forms.CharField(max_length=20, min_length= 3)
    title = forms.CharField(max_length=10, min_length=2)

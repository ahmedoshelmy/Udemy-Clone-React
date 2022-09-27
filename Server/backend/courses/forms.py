from django import forms

class CourseForm(forms.Form):
    description = forms.CharField(max_length=100, min_length= 3)
    title = forms.CharField(max_length=50, min_length=2)

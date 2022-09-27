from django import forms
from django.core import validators
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def validate_name(value):
    if len(value) < 3:
        raise ValidationError(
            _('%(value)s is not a valid name it should be more than 2 characters'),
            params={'value': value},
        )


class UserForm(forms.Form):
    first_name = forms.CharField(max_length=20, validators=[validate_name])
    last_name = forms.CharField(max_length=20)
    email = forms.EmailField()
    password = forms.CharField(max_length=20)
    age = forms.IntegerField()
    birth_date = forms.DateField()

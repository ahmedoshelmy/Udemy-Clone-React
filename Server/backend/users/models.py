from django.db import models
from dateutil.relativedelta import relativedelta
from datetime import datetime


# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField()
    password = models.CharField(max_length=20)
    birth_date = models.DateField()

    class Meta:
        db_table = 'user'
        
    def __str__(self):
        return self.name

    @property
    def age(self):
        difference_in_years = relativedelta(datetime.now(), self.birth_date).years
        return difference_in_years

    @property
    def name(self):
        return "{} - {}".format(self.first_name, self.last_name)

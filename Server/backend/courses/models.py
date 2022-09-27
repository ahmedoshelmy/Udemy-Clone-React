from django.db import models

# Create your models here.

class CourseModel(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=90)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.title
    class Meta:
        db_table='course'


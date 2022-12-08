import uuid
from django.db import models

# Create your models here.
class Task(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    text = models.CharField(verbose_name='Текст', max_length=50)
    isDone = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.text}'
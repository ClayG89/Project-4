from django.db import models

class Truck(models.Model):
    name = models.CharField(max_length=100)
    trailertype = models.CharField(max_length=100)
    hours = models.IntegerField()
    Phone = models.PhoneField()

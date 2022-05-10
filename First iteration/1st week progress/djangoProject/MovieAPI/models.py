from django.db import models

# python manage.py makemigrations MovieAPI
# python manage.py sqlmigrate MovieAPI 0001
# python manage.py migrate

class Movie (models.Model):
    name = models.CharField(max_length=100, default="")
    recommandation_percent = models.IntegerField(default=0)
    image_url = models.CharField(max_length=250, default="")
    class Meta:
        db_table = "MOVIES"
from django.db import models


class Movie (models.Model):
    name = models.CharField(max_length=100, default="")
    release_date = models.CharField(max_length=10, default="")
    director = models.CharField(max_length=100, default="")
    imdb_rating = models.IntegerField(default=0)
    run_time = models.IntegerField(default=0)
    production_company = models.CharField(max_length=500, default="")
    language = models.CharField(max_length=50, default="")
    image_url = models.CharField(max_length=350, default="")
    overview = models.CharField(max_length=2048, default="")
    released = models.BooleanField(default=False)

    class Meta:
        db_table = "movie_db"

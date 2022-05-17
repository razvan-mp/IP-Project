import json

from django.db.models import Q
from django.http import HttpResponse, JsonResponse

import csv

from movieAPI.models import Movie
from rest_framework.decorators import api_view


@api_view(['GET'])
def hello(request):
    return HttpResponse("Hello")


@api_view(['GET'])
def populate(request):
    try:
        with open("movie_db.csv", encoding="utf8") as csv_file:
            csvreader = csv.reader(csv_file, delimiter='~')
            line_count = 0
            for row in csvreader:
                line_count += 1
                if line_count == 1:
                    continue

                name = row[1]
                release_date = row[3]
                director = row[5]
                imdb_rating = int(row[6])
                run_time = int(row[7])
                production_company = row[8]
                language = row[9]
                image_url = row[11]

                if not image_url.startswith('https://m.media-amazon.com/'):
                    pass
                else:
                    image_url_split = image_url.split('_')
                    image_url_end = '_V1_UX1024.jpg'
                    image_url = image_url_split[0] + image_url_end

                overview = row[12]
                try:
                    movie = Movie(None, name, release_date, director, imdb_rating,
                                  run_time, production_company, language, image_url, overview, True)
                    movie.save(True)
                    print(line_count)
                except Exception as e:
                    print(e)
        return HttpResponse(status=200)
    except Exception as e:
        print(e)
        return HttpResponse(status=500)


@api_view(['GET'])
def get_movies(request):
    try:
        movies = list(Movie.objects.filter(~Q(image_url='linklaposter')).filter(Q(released=True)).all().values())

        return JsonResponse(movies, safe=False)
    except Exception as e:
        print(e)
        return HttpResponse(status=500)


@api_view(['POST'])
def add_movie(request):
    try:
        body = json.loads(request.body)
        print(body)
        movie = Movie(None, body["name"], body["release_date"], "", body["imdb_rating"],
                      body["run_time"], "", "", body["image_url"], body["overview"])
        movie.save()
        return HttpResponse(status=201)
    except Exception as e:
        print(e)
        return HttpResponse(status=500)


@api_view(['DELETE'])
def delete_movie(request):
    try:
        body = json.loads(request.body)
        movie_status = Movie.objects.filter(Q(name=body["name"])).exists()
        if movie_status:
            movie = Movie.objects.get(Q(name=body["name"]))
            movie.delete()
        return HttpResponse(status=200)
    except Exception as e:
        print(e)
        return HttpResponse(status=500)


@api_view(['GET'])
def get_history(request):
    try:
        movie_status = Movie.objects.filter(Q(released=True)).filter(~Q(image_url='linklaposter')).order_by('-id').all().values()[:5:-1]
        return JsonResponse(movie_status, safe=False)
    except Exception as e:
        print(e)
        return HttpResponse(status=500)


@api_view(['GET'])
def get_upcoming(request):
    try:
        movies = list(Movie.objects.filter(~Q(released=True)).all().values())[:4]
        return JsonResponse(movies, safe=False)
    except Exception as e:
        print(e)
        return HttpResponse(status=500)


@api_view(['GET'])
def get_top10(request):
    try:
        movies = list(Movie.objects.filter(~Q(image_url='linklaposter')).order_by('-imdb_rating').all().values())[:10]
        return JsonResponse(movies, safe=False)
    except Exception as e:
        print(e)
        return HttpResponse(status=500)

import json

from django.db.models import Q
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

import csv

from MovieAPI.models import Movie
from rest_framework.decorators import api_view


@api_view(['GET'])
def hello(request):
    return HttpResponse("Hello")

@api_view(['GET'])
def populate(request):
    try:
        with open("imdb_top_1000.csv") as csv_file:
            csvreader = csv.reader(csv_file, delimiter=';')
            line_count = 0
            for row in csvreader:
                line_count += 1
                if line_count == 1:
                    continue
                url = row[0]
                name = row[1]
                score = row[8]
                try:
                    movie = Movie(None, name, score, url)
                    movie.save()
                except:
                    pass
                print(line_count)
        return HttpResponse(status=200)
    except Exception as e:
        print(e)
        return HttpResponse(status=500)


@api_view(['GET'])
def get_movies(request):
    try:
        return JsonResponse(list(Movie.objects.all().values()), safe=False)
    except Exception as e:
        print(e)
        return HttpResponse(status=500)


@api_view(['POST'])
def add_movie(request):
    try:
        body = json.loads(request.body)
        movie = Movie(None, body["name"], body["recommandation_percent"], body["image_url"])
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
        movie_status = Movie.objects.filter().order_by('-id').all().values()[:5:-1]
        return JsonResponse(movie_status, safe=False)
    except Exception as e:
        print(e)
        return HttpResponse(status=500)



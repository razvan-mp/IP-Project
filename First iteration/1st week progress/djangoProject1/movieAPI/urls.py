from django.urls import path
from . import views

urlpatterns = [
    # path('populate/', views.populate),
    path('hello/', views.hello),
    path('get_movies/', views.get_movies),
    path('add_movie/', views.add_movie),
    path('delete_movie/', views.delete_movie),
    path('get_history/', views.get_history),
    path('get_upcoming/', views.get_upcoming),
    path('get_top10/', views.get_top10),
]

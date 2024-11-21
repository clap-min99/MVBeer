from django.shortcuts import render, get_list_or_404, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.conf import settings
from .models import Movie, Beverage, Whiskey, Beer, Wine, NonAlcohol, Comment
from .serializers import MovieSerializer, MovieListSerializer, BeverageSerializer, BeerSerializer, CommentSerializer
import requests



# Create your views here.



# @api_view(['GET'])
# def index(request):
#     api_key = settings.API_KEY

#     url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"

#     headers = {
#         "accept": "application/json",
#         "Authorization": f"Bearer {api_key}"
#     }

#     response = requests.get(url, headers=headers)

#     return Response(response)



@api_view(['GET'])
def movie_all(request):
    movies = get_list_or_404(Movie)
    if request.method == 'GET':
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)


@api_view(['GET'])    
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, movie_id = movie_pk)
    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        return Response(serializer.data)
    

@api_view(['GET'])
def beverage_main(request):
    beverages = get_list_or_404(Beverage)  
    if request.method == 'GET':
        serializer = BeverageSerializer(beverages, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def beer_list(request):
    beers = get_list_or_404(Beer)  # Beer 모델의 모든 객체를 가져옴
    if request.method == 'GET':
        serializer = BeerSerializer(beers, many=True)  # many=True를 사용하여 쿼리셋 직렬화
        return Response(serializer.data)
    

@api_view(['GET'])
def comment_list(request):
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)
from django.shortcuts import render, get_list_or_404, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.conf import settings
from .models import Movie, Beverage, Whiskey, Beer, Wine, NonAlcohol, Comment
from .serializers import MovieSerializer, MovieListSerializer, BeverageSerializer, BeerSerializer, CommentSerializer, WhiskeySerializer, WineSerializer, NonAlcoholSerializer
import requests


# Create your views here.

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
    beers = get_list_or_404(Beer)
    serializer = BeerSerializer(beers, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def beer_detail(request, beer_id):
    beer = get_object_or_404(Beer, id=beer_id)
    serializer = BeerSerializer(beer)
    return Response(serializer.data)

@api_view(['GET'])
def whiskey_list(request):
    whiskies = get_list_or_404(Whiskey)
    serializer = WhiskeySerializer(whiskies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def whiskey_detail(request, whiskey_id):
    whiskey = get_object_or_404(Whiskey, id=whiskey_id)
    serializer = WhiskeySerializer(whiskey)
    return Response(serializer.data)

@api_view(['GET'])
def wine_list(request):
    wines = get_list_or_404(Wine)
    serializer = WineSerializer(wines, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def wine_detail(request, wine_id):
    wine = get_object_or_404(Wine, id=wine_id)
    serializer = WineSerializer(wine)
    return Response(serializer.data)

@api_view(['GET'])
def non_alcohol_list(request):
    nonalcohols = get_list_or_404(NonAlcohol)
    serializer = NonAlcoholSerializer(nonalcohols, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def non_alcohol_detail(request, non_alcohol_id):
    nonalcohol = get_object_or_404(NonAlcohol, id=non_alcohol_id)
    serializer = NonAlcoholSerializer(nonalcohol)
    return Response(serializer.data)

    
    

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def comment_list(request, movie_pk):
    if request.method == 'GET':
        comments = Comment.objects.filter(movie_id=movie_pk)  # 필터링 조건 예시
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user, movie_id=movie_pk)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
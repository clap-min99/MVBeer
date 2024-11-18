from django.shortcuts import render, get_list_or_404, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.conf import settings
import requests


# Create your views here.

@api_view(['GET'])
def index(request):
    api_key = settings.API_KEY

    url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"

    headers = {
        "accept": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzQ3OWE3OWYxMmI0MzIxMDJiMWNkYTA2ZjY5NWY4NiIsIm5iZiI6MTczMTg5OTQxNC4zODg3NjEzLCJzdWIiOiI2NzJkYmVkODliN2UwOWNmZGNjNDQ4ZjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.n3kNqTXyXaOSDePDuje8haUvwaDhgzh9O6weI061pQQ"
    }

    response = requests.get(url, headers=headers)

    return Response(response)
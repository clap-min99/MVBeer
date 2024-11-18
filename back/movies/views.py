from django.shortcuts import render, get_list_or_404, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.conf import settings
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
def index(request):
    api_key = settings.API_KEY
    url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"

    headers = {
        "accept": "application/json",
        "Authorization": f"Bearer {api_key}"
    }

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # HTTP 에러 발생 시 예외 처리
        data = response.json()  # JSON 데이터를 파싱
    except requests.exceptions.RequestException as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    except ValueError as e:  # JSON 파싱 실패
        return Response({"error": "Invalid JSON response from TMDB API"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    for rslt in data.get('results', []):
        print('id=', rslt.get('id'))
        print('title=', rslt.get('title'))
    
        id = rslt.get('id')
        title = rslt.get('title')

        save_data = {
            'id': id,
            'title': title,
        }
        

    return Response(data, status=response.status_code)
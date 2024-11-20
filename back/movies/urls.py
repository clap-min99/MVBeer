from django.urls import path
from . import views
from .views import upload_image

urlpatterns = [
    path('movies/', views.movie_all),
    path('movies/<int:movie_pk>/', views.movie_detail),
    path('beverages/', views.beverage_main),
    path('beers/', views.beer_list)
]

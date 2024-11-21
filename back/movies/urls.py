from django.urls import path
from . import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('movies/', views.movie_all),
    path('movies/<int:movie_pk>/', views.movie_detail),
    path('beverages/', views.beverage_main),
    path('beers/', views.beer_list),
    path('movies/<int:comment_pk>/', views.comment_list)
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


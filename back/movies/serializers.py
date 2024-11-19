from rest_framework import serializers
from .models import Movie, Beverage, Whiskey, Beer, Wine, NonAlcohol

class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id','title', 'summary')


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'

class BeverageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beverage
        fields = '__all__'

class BeerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beer
        fields = '__all__'
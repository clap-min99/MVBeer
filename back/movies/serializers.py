from rest_framework import serializers
from .models import Movie, MovieGenre, Beverage, Whiskey, Beer, Wine, NonAlcohol

class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id','title', 'summary')


class MovieSerializer(serializers.ModelSerializer):
    genres = serializers.SerializerMethodField()

    class Meta:
        model = Movie
        fields = '__all__'
    
    def get_genres(self, obj):
        return [
            {
                "id": genre.id,
                "name": genre.name,
                "recommended_beverage": {
                    "type": genre.beverage.type,  # 큰 범주
                    "subtype": genre.subtype  # 세부 주류
                }
            }
            for genre in obj.genres.all()
        ]

class BeverageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beverage
        fields = '__all__'

class BeerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beer
        fields = '__all__'
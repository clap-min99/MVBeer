from rest_framework import serializers
from .models import Movie, MovieGenre, Beverage, Whiskey, Beer, Wine, NonAlcohol, BeerImage, WineImage, WhiskeyImage, NonAlcoholImage, Comment

class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id','title', 'summary', 'poster_url')


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

class BeerImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BeerImage
        fields = ['image', 'description']

class BeerSerializer(serializers.ModelSerializer):
    images = BeerImageSerializer(many=True, read_only=True)

    class Meta:
        model = Beer
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

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

        
# Beer Image Serializer
class BeerImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BeerImage
        fields = ['id', 'image', 'description']

class BeerSerializer(serializers.ModelSerializer):
    images = BeerImageSerializer(many=True)

    class Meta:
        model = Beer
        fields = ['id', 'subtype', 'description', 'examples', 'images']
# Wine Image Serializer
class WineImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = WineImage
        fields = ['id', 'image', 'description']  # 이미지 필드 포함

class WineSerializer(serializers.ModelSerializer):
    images = WineImageSerializer(many=True, read_only=True)  # 관련 이미지 추가

    class Meta:
        model = Wine
        fields = ['id', 'subtype', 'description', 'examples', 'images']


# Whiskey Image Serializer
class WhiskeyImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhiskeyImage
        fields = ['id', 'image', 'description']

class WhiskeySerializer(serializers.ModelSerializer):
    images = WhiskeyImageSerializer(many=True, read_only=True)

    class Meta:
        model = Whiskey
        fields = ['id', 'subtype', 'description', 'examples', 'images']


# NonAlcohol Image Serializer
class NonAlcoholImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = NonAlcoholImage
        fields = ['id', 'image', 'description']

class NonAlcoholSerializer(serializers.ModelSerializer):
    images = NonAlcoholImageSerializer(many=True, read_only=True)

    class Meta:
        model = NonAlcohol
        fields = ['id', 'subtype', 'description', 'examples', 'images']

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

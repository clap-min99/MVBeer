from django.db import models

# Create your models here.

class Beverage(models.Model):
    type = models.CharField(max_length=50)  # 주류 유형 (Beer, Whiskey 등)
    
    def __str__(self):
        return self.name

class Beer(models.Model):
    beverages = models.ManyToManyField(Beverage, related_name='beers')
    subtype = models.CharField(max_length=50)  # 에일, 라거 등
    description = models.TextField(blank=True, null=True)
    examples = models.TextField()

class Whiskey(models.Model):
    beverages = models.ManyToManyField(Beverage, related_name='whiskies')
    subtype = models.CharField(max_length=50)  # 버번, 스카치 등
    description = models.TextField(blank=True, null=True)
    examples = models.TextField()

class Wine(models.Model):
    beverages = models.ManyToManyField(Beverage, related_name='wines')
    subtype = models.CharField(max_length=50)  # 레드, 화이트
    description = models.TextField(blank=True, null=True)
    examples = models.TextField()

class NonAlcohol(models.Model):
    beverages = models.ManyToManyField(Beverage, related_name='nonalcohols')
    subtype = models.CharField(max_length=50)  # 콜라, 사이다, 뽀로로
    description = models.TextField(blank=True, null=True)
    examples = models.TextField()

# class Cocktail(models.Model): 
#     beverage = models.OneToOneField(Beverage, on_delete=models.CASCADE, related_name='cocktail')
#     subtype = models.CharField(max_length=50) # sweet, unsweet
#     description = models.TextField(blank=True, null=True)
#     examples = models.TextField()


class MovieGenre(models.Model):
    name = models.CharField(max_length=100)  # 영화 장르 이름
    # beverage = models.OneToOneField(
    #     Beverage, 
    #     on_delete=models.CASCADE, 
    #     related_name="paired_genre"
    # )  # 1:1 매칭된 주류

    def __str__(self):
        return self.name


class Movie(models.Model):
    movie_id = models.IntegerField()
    title = models.CharField(max_length=200)  # 영화 제목
    summary = models.TextField()  # 줄거리
    release_date = models.DateField()  # 개봉일
    director = models.CharField(max_length=100)  # 감독 이름
    actors = models.CharField(max_length=100)  # 주연 배우 이름
    genres = models.ManyToManyField(
        MovieGenre, 
        related_name="movies"
    )  # 장르 (N:1 관계)
    adult = models.BooleanField()  # 성인 or not
    star_rating = models.DecimalField(max_digits=3, decimal_places=1)  # 별점 (예: 4.5)
    poster_url = models.TextField()
    def __str__(self):
        return self.title
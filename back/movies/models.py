from django.db import models

# Create your models here.


class Beverage(models.Model):
    name = models.CharField(max_length=100)  # 주류 이름
    type = models.CharField(max_length=50)  # 주류 유형 (예: Beer, Wine, Whiskey 등)
    description = models.TextField(blank=True, null=True)  # 주류 설명 (선택)

    def __str__(self):
        return self.name


class MovieGenre(models.Model):
    name = models.CharField(max_length=100)  # 영화 장르 이름
    description = models.TextField(blank=True, null=True)  # 장르 설명 (선택)
    beverage = models.OneToOneField(
        Beverage, 
        on_delete=models.CASCADE, 
        related_name="paired_genre"
    )  # 1:1 매칭된 주류

    def __str__(self):
        return self.name


class Movie(models.Model):
    title = models.CharField(max_length=200)  # 영화 제목
    summary = models.TextField()  # 줄거리
    release_date = models.DateField()  # 개봉일
    director = models.CharField(max_length=100)  # 감독 이름
    main_actor = models.CharField(max_length=100)  # 주연 배우 이름
    genre = models.ForeignKey(
        MovieGenre, 
        on_delete=models.CASCADE, 
        related_name="movies"
    )  # 장르 (N:1 관계)
    rating = models.CharField(max_length=20)  # 연령 등급 (예: PG-13, R 등)
    star_rating = models.DecimalField(max_digits=3, decimal_places=1)  # 별점 (예: 4.5)

    def __str__(self):
        return self.title
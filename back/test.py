import requests
import json
import os

TMDB_API_KEY = '5e1b88f49f098241f68c4a402afd6bea'

GENRE_MAP = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
}

def get_movie_datas():
    total_data = []
    BASE_URL = "https://api.themoviedb.org/3/movie/"

    # 1페이지부터 500페이지까지 (페이지당 20개, 총 10,000개)
    for i in range(3, 4):
        request_url = f"{BASE_URL}popular?api_key={TMDB_API_KEY}&language=ko-KR&page={i}"
        movies = requests.get(request_url).json()
        # print(movies)
        for movie in movies['results']:
            if movie.get('release_date', ''):
                genre_names = [GENRE_MAP[genre_id] for genre_id in movie['genre_ids'] if genre_id in GENRE_MAP]
                fields = {
                    'movie_id': movie['id'],
                    'title': movie['title'],
                    'released_date': movie['release_date'],
                    'popularity': movie['popularity'],
                    'vote_avg': movie['vote_average'],
                    'overview': movie['overview'],
                    'poster_url': movie['poster_path'],
                    'genres': genre_names,
                    'actors': [],
                    'director': ''  
                }

                data = {
                    "pk": movie['id'],
                    "model": "movies.movie",
                    "fields": fields
                }

                total_data.append(data)
    

    for data in total_data:
            
            movie_id = data['fields']['movie_id']
            
            credit_request_url = f"{BASE_URL}{movie_id}/credits?api_key={TMDB_API_KEY}"
            credit_info = requests.get(credit_request_url).json()
            print(credit_info)

            # 배우는 최대 5명까지만 저장한다.
            for cast in credit_info['cast'][:10]:
                print(cast)
                data['fields']['actors'].append(cast['name'])
            
            if credit_info['crew']:
                data['fields']['director'] = credit_info['crew'][0]['name']

    with open("movie_data.json", "w", encoding="utf-8") as w:
        json.dump(total_data, w, indent="   ", ensure_ascii=False)

get_movie_datas()
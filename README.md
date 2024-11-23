# final_pjt MVBeer

## 20241118


## 20241119

## 20241120

## 20241121

* Git clone 새로 받거나 pull 받아온 뒤에 해야할 일!

    내가 작업하던 브랜치(ej, sm)으로 옮겨가기

* Back(Django)

    1. .env에 API_KEY 적어놓기

    2. 가상환경(venv) 설치

        `python -m venv venv`

        `source venv/Scripts/activate`

    3. `pip install -r requirements.txt`
    
        (전역에 `django-cors-headers`, `pillow` 설치 안되어 있으면 실행 안되는게 있을 수도 있다. 전역에도 설치하고 가상환경에도 install 하자!)

        `pip install django-cors-headers`
        
        `pip install pillow`    
            

    4. `python manage.py makemigrations`

    5. `python manage.py migrate`

    6. 데이터 load 하기

        `python manage.py loaddata beverage.json`

        `python manage.py loaddata movie_genre.json`

        `python manage.py loaddata beverage_detail.json movie_data.json`

    7. alcohol.py 실행해서 media에 있는 image 업로드 하기

        **각 주류 파일에 있는 이미지명(blanc.jpg...), beverage_detail의 examples에 적힌 주류명이 완전히 일치**해야 이미지가 업로드 된다.

    8. 서버 실행 
        `python manage.py runserver`

* front(vue3)
    1. vue project로 이동

        `cd front/mov_eer`

    2. 설치할 것들 

        `npm i`

        `npm install axios`

        - pinia plugin 어쩌구 설치 및 등록하기  
            `npm i pinia-plugin-persistedstate`

            ```js
            import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

            const pinia = createPinia()

            pinia.use(piniaPluginPersistedstate)

            app.use(pinia)

            // stores/counter.js(스토어) 예시
            export const useCounterStore = defineStore('counter', () => {
                return {}
            }, {persist: true})

            ```
        설치, 등록 하면 브라우저의 local storage에 저장된다.(개발자도구-> Application -> local storage에서 확인)

    3. 서버 실행

        `npm run dev`


## 20241122
* back 로그인 기능 구현
  
  `pip install dj-rest-auth`

  `pip install 'dj-rest-auth[with-social]'`

## 20241123

## 20241124

## 20241125

## 20241126
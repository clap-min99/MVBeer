import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAlcoholStore = defineStore(
  'alcohol',
  () => {
    const beers = ref([
      {
        name: "Asahi Super Dry",
        imageUrl: "http://127.0.0.1:8000/media/beer_images/Asahi-Super-Dry.jpg",
        description: "부드럽고 깔끔한 맛을 자랑하는 일본 라거 맥주.",
        region: "Japan",
        taste: "Crisp, Dry",
      },
      {
        name: "Beer Oharas Stout",
        imageUrl: "http://127.0.0.1:8000/media/beer_images/beer-oharas-stout.jpg",
        description: "아이리시 스타일의 깊고 고소한 흑맥주.",
        region: "Ireland",
        taste: "Rich, Roasted, Coffee-like",
      },
      {
        name: "Blanc",
        imageUrl: "http://127.0.0.1:8000/media/beer_images/blanc.jpg",
        description: "상큼한 감귤 향과 부드러운 밀맥주.",
        region: "France",
        taste: "Citrusy, Smooth, Refreshing",
      },
      {
        name: "Budweiser",
        imageUrl: "http://127.0.0.1:8000/media/beer_images/Budweiser.jpg",
        description: "미국을 대표하는 대중적인 라거 맥주.",
        region: "USA",
        taste: "Smooth, Mild",
      },
      {
        name: "Weihenstephaner Hefeweissbier",
        imageUrl: "http://127.0.0.1:8000/media/beer_images/Weihenstephaner Hefeweissbier.jpg",
        description: "독일의 전통적인 밀맥주로 바나나와 클로브 향이 특징.",
        region: "Germany",
        taste: "Fruity, Spicy, Smooth",
      },
    ]);

    const whisky = ref([
      {
        name: "Balvenie Doublewood 12 Year Old",
        imageUrl: "http://127.0.0.1:8000/media/whisky_images/Balvenie DoubleWood 12 Year Old.jpg",
        description: "달콤하고 풍부한 오크향과 견과류 풍미의 스카치 위스키.",
        region: "Scotland",
        taste: "Sweet, Nutty, Spicy",
      },
      {
        name: "Glenfiddich 12 Year Old",
        imageUrl: "http://127.0.0.1:8000/media/whisky_images/Glenfiddich 12 Year Old.jpg",
        description: "싱글 몰트 위스키로, 과일 향과 오크의 균형이 특징.",
        region: "Scotland",
        taste: "Fruity, Oak, Smooth",
      },
      {
        name: "Hibiki Harmony",
        imageUrl: "http://127.0.0.1:8000/media/whisky_images/Hibiki Harmony.jpg",
        description: "섬세하고 우아한 일본 블렌디드 위스키.",
        region: "Japan",
        taste: "Floral, Light, Balanced",
      },
      {
        name: "Jack Daniel's Single Barrel",
        imageUrl: "http://127.0.0.1:8000/media/whisky_images/Jack Daniel's Single Barrel.jpg",
        description: "깊고 강렬한 풍미와 단일 배치의 독특함을 가진 테네시 위스키.",
        region: "USA",
        taste: "Rich, Spicy, Sweet",
      },
      {
        name: "Jameson Irish Whiskey",
        imageUrl: "http://127.0.0.1:8000/media/whisky_images/Jameson Irish Whiskey.jpg",
        description: "부드럽고 달콤한 맛으로 유명한 아일랜드 위스키.",
        region: "Ireland",
        taste: "Sweet, Light, Smooth",
      },
      {
        name: "Maker's Mark",
        imageUrl: "http://127.0.0.1:8000/media/whisky_images/Maker's Mark.jpg",
        description: "미국 버번 위스키로, 바닐라와 캐러멜의 풍미가 특징.",
        region: "USA",
        taste: "Vanilla, Caramel, Smooth",
      },
    ]);

    const wine = ref([
      {
        name: "Cabernet Sauvignon (Robert Mondavi Napa Valley)",
        imageUrl: "http://127.0.0.1:8000/media/wine_images/Cabernet Sauvignon (Robert Mondavi Napa Valley).jpg",
        description: "깊고 풍부한 블랙베리와 자두의 맛이 조화를 이루는 레드 와인.",
        region: "USA",
        taste: "Bold, Fruity, Dry",
      },
      {
        name: "Champagne (Moet & Chandon Brut Imperial)",
        imageUrl: "http://127.0.0.1:8000/media/wine_images/Champagne (Moet & Chandon Brut Imperial).jpg",
        description: "섬세한 버블과 부드러운 과일 향이 특징인 샴페인.",
        region: "France",
        taste: "Crisp, Citrusy, Elegant",
      },
      {
        name: "Chardonnay (Louis Latour Pouilly Fuisse)",
        imageUrl: "http://127.0.0.1:8000/media/wine_images/Chardonnay (Louis Latour Pouilly-Fuisse).jpg",
        description: "부르고뉴 지방의 샤르도네로, 부드러운 바닐라와 과일 향이 특징.",
        region: "France",
        taste: "Creamy, Buttery, Fruity",
      },
      {
        name: "Miraval Rose (Provence)",
        imageUrl: "http://127.0.0.1:8000/media/wine_images/Miraval Rose (Provence).jpg",
        description: "상쾌하고 가벼운 핑크빛 로제 와인.",
        region: "France",
        taste: "Light, Fruity, Crisp",
      },
      {
        name: "Pinot Noir (Domaine De La Romanee Conti)",
        imageUrl: "http://127.0.0.1:8000/media/wine_images/Pinot Noir (Domaine de la Romanee-Conti).jpg",
        description: "부르고뉴의 프리미엄 레드 와인으로, 체리와 스파이스의 복합적인 향.",
        region: "France",
        taste: "Complex, Fruity, Earthy",
      },
    ]);

    return { beers, whisky, wine };
  },
  { persist: true } // persist 설정
)

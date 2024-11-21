import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAlcoholStore = defineStore(
  'alcohol',
  () => {
    const beers = ref([
      {
        name: "Asahi Super Dry",
        imageUrl: "http://127.0.0.1:8000/media/beer_images/Asahi-Super-Dry.jpg",
        description: "아사히 슈퍼 드라이 맥주는 일본에서 생산된 대표적인 라거로, 1987년에 처음 출시되었습니다. 쓴맛이 적고 깔끔한 마무리가 특징이며, '카라구치'라는 드라이한 스타일로 유명합니다.",
        region: "Japan",
        taste: "Crisp, Dry",
      },
      {
        name: "Beer Oharas Stout",
        imageUrl: "http://127.0.0.1:8000/media/beer_images/beer-oharas-stout.jpg",
        description: "오하라스 스타우트는 전통적인 아일랜드 흑맥주 스타일로, 깊고 고소한 커피와 초콜릿의 풍미가 인상적입니다. 크리미한 질감과 부드러운 마무리가 특징입니다.",
        region: "Ireland",
        taste: "Rich, Roasted, Coffee-like",
      },
      {
        name: "Blanc",
        imageUrl: "http://127.0.0.1:8000/media/beer_images/blanc.jpg",
        description: "프랑스의 밀맥주로, 상큼한 감귤 향과 부드러운 바디감이 특징입니다. 특히 여름철에 청량감을 제공하며, 과일 맥주 애호가들에게 사랑받는 제품입니다.",
        region: "France",
        taste: "Citrusy, Smooth, Refreshing",
      },
      {
        name: "Budweiser",
        imageUrl: "http://127.0.0.1:8000/media/beer_images/Budweiser.jpg",
        description: "1876년 미국에서 처음 출시된 버드와이저는 라이스(쌀)를 첨가하여 더욱 부드럽고 깔끔한 맛을 자랑합니다. 전 세계적으로 가장 많이 소비되는 맥주 중 하나입니다.",
        region: "USA",
        taste: "Smooth, Mild",
      },
      {
        name: "Weihenstephaner Hefeweissbier",
        imageUrl: "http://127.0.0.1:8000/media/beer_images/Weihenstephaner Hefeweissbier.jpg",
        description: "세계에서 가장 오래된 맥주 양조장에서 생산된 독일 밀맥주입니다. 바나나와 클로브 향이 어우러져 부드럽고 풍부한 맛을 선사합니다.",
        region: "Germany",
        taste: "Fruity, Spicy, Smooth",
      },
    ]);

    const whisky = ref([
      {
        name: "Balvenie Doublewood 12 Year Old",
        imageUrl: "http://127.0.0.1:8000/media/whisky_images/Balvenie DoubleWood 12 Year Old.jpg",
        description: "스코틀랜드 스페이사이드에서 생산된 이 싱글 몰트 위스키는 두 종류의 오크통에서 숙성됩니다. 첫 번째로 아메리칸 오크통에서 숙성된 뒤, 셰리 오크통에서 마무리됩니다. 견과류와 바닐라의 달콤함이 두드러집니다.",
        region: "Scotland",
        taste: "Sweet, Nutty, Spicy",
      },
      {
        name: "Glenfiddich 12 Year Old",
        imageUrl: "http://127.0.0.1:8000/media/whisky_images/Glenfiddich 12 Year Old.jpg",
        description: "세계에서 가장 널리 알려진 싱글 몰트 위스키로, 과일 향과 오크의 조화로운 맛이 특징입니다. 글렌피딕은 1887년부터 전통적인 방식으로 양조됩니다.",
        region: "Scotland",
        taste: "Fruity, Oak, Smooth",
      },
      {
        name: "Hibiki Harmony",
        imageUrl: "http://127.0.0.1:8000/media/whisky_images/Hibiki Harmony.jpg",
        description: "일본의 블렌디드 위스키로, 10가지 이상의 몰트와 그레인 위스키가 조화를 이룹니다. 꽃향기와 꿀의 달콤함이 조화롭게 어우러져 부드럽고 우아한 맛을 제공합니다.",
        region: "Japan",
        taste: "Floral, Light, Balanced",
      },
      {
        name: "Jack Daniel's Single Barrel",
        imageUrl: "http://127.0.0.1:8000/media/whisky_images/Jack Daniel's Single Barrel.jpg",
        description: "미국 테네시주에서 생산된 이 위스키는 단일 배치에서 추출되어 독특한 맛과 강렬한 풍미를 제공합니다. 깊고 스모키한 캐릭터가 특징입니다.",
        region: "USA",
        taste: "Rich, Spicy, Sweet",
      },
      {
        name: "Jameson Irish Whiskey",
        imageUrl: "http://127.0.0.1:8000/media/whisky_images/Jameson Irish Whiskey.jpg",
        description: "부드러운 맛과 달콤한 향이 특징인 아일랜드 위스키로, 세 번 증류 과정을 거쳐 더욱 깔끔한 마무리를 제공합니다. 초심자에게도 적합한 맛입니다.",
        region: "Ireland",
        taste: "Sweet, Light, Smooth",
      },
      {
        name: "Maker's Mark",
        imageUrl: "http://127.0.0.1:8000/media/whisky_images/Maker's Mark.jpg",
        description: "미국 켄터키주에서 생산된 프리미엄 버번 위스키로, 바닐라와 캐러멜 풍미가 강하게 느껴집니다. 밀을 주원료로 사용하여 부드럽고 달콤한 맛을 자랑합니다.",
        region: "USA",
        taste: "Vanilla, Caramel, Smooth",
      },
    ]);

    const wine = ref([
      {
        name: "Cabernet Sauvignon (Robert Mondavi Napa Valley)",
        imageUrl: "http://127.0.0.1:8000/media/wine_images/Cabernet Sauvignon (Robert Mondavi Napa Valley).jpg",
        description: "나파 밸리의 대표 와인으로, 블랙베리, 자두, 그리고 은은한 스파이스와 오크 풍미가 조화를 이룹니다. 강렬하고 우아한 풀바디 와인입니다.",
        region: "USA",
        taste: "Bold, Fruity, Dry",
      },
      {
        name: "Champagne (Moet & Chandon Brut Imperial)",
        imageUrl: "http://127.0.0.1:8000/media/wine_images/Champagne (Moet & Chandon Brut Imperial).jpg",
        description: "샴페인의 대표 브랜드로, 미세한 탄산과 부드러운 과일 향이 특징입니다. 모든 축제와 기념일에 어울리는 선택입니다.",
        region: "France",
        taste: "Crisp, Citrusy, Elegant",
      },
      {
        name: "Chardonnay (Louis Latour Pouilly Fuisse)",
        imageUrl: "http://127.0.0.1:8000/media/wine_images/Chardonnay (Louis Latour Pouilly-Fuisse).jpg",
        description: "프랑스 부르고뉴 지방의 샤르도네로, 풍부한 바닐라 향과 부드러운 질감이 특징입니다. 크리미한 질감과 과일 맛의 조화가 인상적입니다.",
        region: "France",
        taste: "Creamy, Buttery, Fruity",
      },
      {
        name: "Miraval Rose (Provence)",
        imageUrl: "http://127.0.0.1:8000/media/wine_images/Miraval Rose (Provence).jpg",
        description: "핑크빛 색상이 아름다운 로제 와인으로, 신선한 과일 향과 부드러운 질감이 어우러집니다. 여름철에 특히 잘 어울립니다.",
        region: "France",
        taste: "Light, Fruity, Crisp",
      },
      {
        name: "Pinot Noir (Domaine De La Romanee Conti)",
        imageUrl: "http://127.0.0.1:8000/media/wine_images/Pinot Noir (Domaine de la Romanee-Conti).jpg",
        description: "부르고뉴의 상징적인 와인으로, 복잡한 체리와 스파이스 향이 특징입니다. 전 세계적으로 가장 고급스러운 와인 중 하나로 꼽힙니다.",
        region: "France",
        taste: "Complex, Fruity, Earthy",
      },
    ]);

    return { beers, whisky, wine };
  },
  { persist: true } // persist 설정
)

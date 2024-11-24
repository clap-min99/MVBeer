<template>
    <div class="ale-view">
      <h1>🍺 Ale 이란?</h1>
      <div class="ale-intro">
        <img
          src="@/assets/IPA.png" 
          alt="Ale Beer"
          class="ale-image"
        />
        <div class="ale-description">
          <p>
            에일(Ale)은 상면 발효 방식으로 만들어지는 맥주로, 발효 온도가 높아 
            과일향과 풍부한 풍미를 느낄 수 있는 것이 특징입니다. 
            에일은 역사적으로 가장 오래된 맥주 스타일 중 하나로, 
            IPA, 페일 에일, 포터, 벨지안 에일 등 다양한 종류를 가지고 있습니다. 
            특히, 독특한 향과 맛 덕분에 전 세계에서 사랑받고 있습니다.
          </p>
          <p class="ale-action-pairing">
            🍿 에일은 액션 영화와 환상적인 조합을 이룹니다.  
            입안 가득 퍼지는 에일의 과일향과 톡 쏘는 홉의 쓴맛은 영화 속 화려한 액션 장면의 짜릿함을 더해줍니다.  
            시원한 한 모금과 함께 스펙터클한 순간들을 즐겨보세요!
          </p>
        </div>
      </div>
      
      <div class="beer-list">
        <h2>에일 맥주</h2>
        <div v-for="beer in beers" :key="beer.id" class="beer-card">
          <h3>{{ beer.name }}</h3>
          <p>{{ beer.description }}</p>
          <p><strong>대표 브랜드:</strong> {{ beer.representativeBrands }}</p>
          <p><strong>스타일:</strong> {{ beer.style }}</p>
          <p>
            <strong>추천 안주:</strong> {{ beer.foodPairing }}
            <span>{{ beer.foodEmoji }}</span>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const beers = [
    {
      id: 1,
      name: "IPA (India Pale Ale)",
      description: "홉의 풍미가 강렬하고 과일 향이 나는 에일.",
      representativeBrands: "BrewDog Punk IPA, Sierra Nevada IPA",
      style: "IPA",
      foodPairing: "매운 음식, 치즈 플래터",
      foodEmoji: "🌶️🧀"
    },
    {
      id: 2,
      name: "페일 에일 (Pale Ale)",
      description: "홉과 몰트의 조화로운 맛과 밝은 색깔이 특징인 에일.",
      representativeBrands: "Sierra Nevada Pale Ale, London Pride",
      style: "페일 에일",
      foodPairing: "구운 고기, 피자",
      foodEmoji: "🍖🍕"
    },
    {
      id: 3,
      name: "포터 (Porter)",
      description: "부드럽고 초콜릿 풍미가 느껴지는 흑맥주.",
      representativeBrands: "Fuller’s London Porter, Baltika Porter",
      style: "포터",
      foodPairing: "스테이크, 초콜릿 디저트",
      foodEmoji: "🥩🍫"
    },
    {
      id: 4,
      name: "벨지안 에일 (Belgian Ale)",
      description: "풍부한 향신료와 과일 향이 독특한 벨기에 스타일의 에일.",
      representativeBrands: "Duvel, Leffe Blond",
      style: "벨지안 에일",
      foodPairing: "치즈 플래터, 조개 요리",
      foodEmoji: "🧀🦪"
    }
  ];
  </script>
  
  <style scoped>
  .ale-view {
    padding: 20px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
  }
  
  .ale-intro {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  
  .ale-image {
    width: 300px;
    height: auto;
    margin-right: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .ale-description {
    color: #555;
    font-size: 16px;
    line-height: 1.8;
    flex: 1;
  }
  
  .ale-action-pairing {
    margin-top: 20px;
    font-style: italic;
    color: #444;
    font-size: 15px;
  }
  
  .beer-list h2 {
    color: #444;
    margin-bottom: 20px;
  }
  
  .beer-card {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .beer-card:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    color: #444;
    margin-bottom: 10px;
  }
  
  p {
    color: #555;
    margin: 5px 0;
    line-height: 1.6;
  }
  </style>
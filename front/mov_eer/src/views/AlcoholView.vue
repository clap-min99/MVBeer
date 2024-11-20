<template>
    <div>
      <h2>Beer Images</h2>
      <div v-for="beer in beers" :key="beer.name" style="margin-bottom: 20px">
        <h3>{{ beer.name }}</h3>
        <img :src="beer.imageUrl" alt="Beer Image" style="width: 200px" />
      </div>
    </div>
  </template>
  
  <script>
  import { useAlcoholStore } from "../stores/alcohol"
  
  export default {
    setup() {
      // Pinia 스토어 가져오기
      const store = useAlcoholStore()
      return {
        beers: store.beers, // beers 데이터 가져오기
        
      }
    },
  }
  </script>

<style scoped>

</style>
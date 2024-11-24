<template>
    <div class="ale-view">
      <h1>Lager</h1>
      <div v-for="beer in filteredBeers" :key="beer.id" class="beer-card">
        <h2>{{ beer.name }}</h2>
        <p>{{ beer.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  import { useLiquorStore } from "@/stores/liquor";
  
  const liquorStore = useLiquorStore();
  
  const filteredBeers = computed(() =>
    liquorStore.beers.filter((beer) => beer.subtype === "Lager")
  );
  </script>
  
  <style scoped>
  .ale-view {
    padding: 20px;
  }
  </style>
  
<template>
    <div>
        <h4>{{ movie.title }}</h4>
        <h5>{{ movie.summary }}</h5>
    </div>
</template>

<script setup>
defineProps({
    movie:Object
})
</script>

<style scoped>

</style>
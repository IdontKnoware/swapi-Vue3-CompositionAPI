<script setup>
const episodeId = defineProps({
  episode_id: { type: Number, required: true, default: null },
  alt_text:   { type: String, required: true, default: 'Star Wars film cover'},
})

const src = `https://starwars-visualguide.com/assets/img/films/${episodeId.episode_id}.jpg`
</script>

<template>
  <img :src="src" :alt="alt_text">
</template>

<style scoped lang="scss">
@import './../assets/breakpoints.scss';

img {
  width: 100%;

  @media only screen and (max-width: $bp-bootstrap-xl) {
    width: 190px;
    height: 200px;
  }
}
</style>
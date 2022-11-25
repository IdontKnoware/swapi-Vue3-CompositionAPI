<script setup>
import FilmCardCover from './FilmCardCover.vue'

defineProps({
  title:      { type: String, required: true, default: '' },
  director:   { type: String, required: true, default: '' },
  year:       { type: String, required: true, default: null },
  characters: { type: Number, required: true, default: null },
  planets:    { type: Number, required: true, default: null },
  starships:  { type: Number, required: true, default: null },
  vehicles:   { type: Number, required: true, default: null },
  species:    { type: Number, required: true, default: null },
  episode_id: { type: Number, required: true, default: null }
})
</script>

<template>
    <FilmCardCover :episode_id="episode_id" :alt_text="title"/>
    <div class="film-card--info">
      <p>{{ `Title: ${title}` }}</p>
      <br>
      <p>{{ `Director: ${director}` }}</p>
      <p>{{ `Year: ${year}` }}</p>
      <p>{{ `Characters: ${characters}` }}</p>
      <p>{{ `Planets: ${planets}` }}</p>
      <p>{{ `Ships: ${starships}` }}</p>
      <p>{{ `Vehicles: ${vehicles}` }}</p>
      <p>{{ `Species: ${species}` }}</p>
    </div>
</template>

<style scoped lang="scss">
@import './../assets/base.scss';
@import './../assets/breakpoints.scss';

.film-card--info {
  @media only screen and (max-width: $bp-bootstrap-xl) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-left: 10px;
  }
}

</style>
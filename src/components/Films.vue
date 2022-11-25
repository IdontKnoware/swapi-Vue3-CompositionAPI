<script setup>
import { onMounted } from 'vue'
import { store } from '../swapi';
import FilmCard from './FilmCard.vue'

// Fetch full films json 
const fetchFilms = async () => {
  const swapi = await fetch("https://swapi.dev/api/films/");
  const json = await swapi.json();

  return json;
}

// Call and set the result of fetching
const films = await fetchFilms()
</script>

<template>
  <section class="film-card" v-for="(film, index) in films.results">
    <FilmCard :title      = "film['title']" 
              :year       = "film['release_date']" 
              :director   = "film['director']"
              :characters = "film['characters'].length"
              :planets    = "film['planets'].length"
              :starships  = "film['starships'].length"
              :vehicles   = "film['vehicles'].length"
              :species    = "film['species'].length"
              :episode_id = "film['episode_id']"
    />
  </section>
</template>

<style scoped lang="scss">
@import '../assets/breakpoints.scss';


@media only screen and (max-width: $bp-bootstrap-md) {
    section {
      display: flex;
      flex-direction: column;
    }

    .film-card {
      width: 70%;
    }

    .film-card--info {
      font-size: 18px;
    }
  }
</style>
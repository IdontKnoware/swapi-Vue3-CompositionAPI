<script setup>
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
  <section class="film-card" v-for="film in films.results">
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

.film-card {
  padding: 12px;
  color: var(--sw-text-yellow);
  border: .15em solid var(--sw-text-yellow);
  border-radius: 5px;
  width: 200px;
  min-height: 535px;
  margin: 10px;

  @media only screen and (max-width: $bp-bootstrap-xl) {
      display: flex;
      width: 40%;
      min-height: 200px;
      padding: 0;
    }

  @media only screen and (max-width: $bp-bootstrap-md) {
    & {
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
}
</style>
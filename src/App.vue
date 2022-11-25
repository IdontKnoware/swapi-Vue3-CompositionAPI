<script setup>
// No utilitzat. El deixo com a ajuda/consultes futures.
import { store } from './swapi.js'

import LogoStarWars from './components/logos/LogoStarWars.vue';
import Films from './components/Films.vue'
import SpinnerLoader from './components/SpinnerLoader.vue'
</script>

<template>
  <header>
    <LogoStarWars />
    <h4>A <span>Vue.js 3</span> application</h4>
  </header>
  <main>
    <Suspense>
      <Films />
      <template #fallback>
        <SpinnerLoader />
      </template>
    </Suspense>
  </main>
</template>

<style scoped lang="scss">
@import './assets/base.scss';
@import './assets/breakpoints.scss';


header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 .05em var(--sw-text-yellow);
  margin-bottom: 50px;

  & h4 {
    margin: 5px;

    & span {
      color: var(--vue-text);
      font-weight: 800;

      &:hover {
        color: #4abf8a;
      }
    }
  }
}

main {
  display: flex;
  flex-wrap: wrap;
  place-content: center;
}
</style>


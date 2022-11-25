// Inicialment tenia problemes amb l'asynchronisme i no aconseguia
// obtenir les pel·lícules. Finalment ho vaig solucionar creant una store, però
// més tard se'm va il·luminar el cervell i vaig trobar com fer-ho sense store, encara
// que per consultes futures he decidit deixar-lo a l'aplicació tot i que no es fa servir,
// ja que em va servir per entendre les stores i el reactive()

import { reactive } from 'vue'

// Fetch full films json 
const fetchFilms = async () => {
  const swapi = await fetch("https://swapi.dev/api/films/");
  const json = await swapi.json();

  return json;
}

// Call and set the result of fetching
const films = await fetchFilms()

// Make available on entire application
export const store = reactive({
  films: films
})
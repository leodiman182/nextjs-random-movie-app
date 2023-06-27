import { URL } from './api';

export async function fetchRandomMovie() {
  const res = await fetch(`${URL}/gerar_aleatorio`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = res.json();

  return data;
}

export async function fetchGenreOptions() {
  const res = await fetch(`${URL}/opcoes_genero`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = res.json();

  return data;
}

export async function fetchMovieByRate(searchRate) {
  console.log('fetch by rate :', searchRate * 2);
  // fetch
  // gerar_aleatorio
}

export async function fetchMovieByGender(searchGender) {
  console.log('fetch by gender :', searchGender);
  // fetch
  // opcoes_genero
}

export async function fetchMovieByRateAndGender(searchRate, searchGender) {
  console.log('fetch by rate and gender :', searchRate * 2, searchGender);
  // fetch
  // gerar_aleatorio_rate_genero
}

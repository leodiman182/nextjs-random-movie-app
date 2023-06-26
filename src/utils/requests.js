import { URL } from './api';

export async function fetchRandomMovie() {
  const res = await fetch(`${URL}/gerar_aleatorio`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = res.json();

  return data;
}

export async function fetchMovieByRate() {
  console.log('by rate');

  // fetch
  // gerar_aleatorio
}

export async function fetchMovieByGender() {
  console.log('by gender');

  // fetch
  // opcoes_genero
}

export async function fetchMovieByRateAndGender() {
  console.log('by rate and gender');

  // fetch
  // gerar_aleatorio_rate_genero
}

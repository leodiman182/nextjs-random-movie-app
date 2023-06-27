import { URL, rateAndGenderURL } from './api';

export async function fetchRandomMovie() {
  const res = await fetch(`${URL}/gerar_aleatorio`);

  if (!res.ok) {
    console.log(res);
    history.forward('/error');
  }

  const data = res.json();

  return data;
}

export async function fetchGenreOptions() {
  const res = await fetch(`${URL}/opcoes_genero`);

  if (!res.ok) {
    console.log(res);
    history.forward('/error');
  }

  const data = res.json();

  return data;
}

export async function fetchMovieByRate(searchRate) {
  const reqBody = {
    rate: searchRate * 2,
    genero: null,
  };

  const res = await fetch(`${URL}/${rateAndGenderURL}`, {
    body: JSON.stringify(reqBody),
    headers: {
      'Content-Type': 'application/json; charset=utf8',
    },
    method: 'POST',
  });

  if (!res.ok) {
    console.log(res);
    history.forward('/error');
  }

  const data = res.json();

  return data;
}

export async function fetchMovieByGender(searchGender) {
  const reqBody = {
    rate: null,
    genero: searchGender,
  };

  const res = await fetch(`${URL}/${rateAndGenderURL}`, {
    body: JSON.stringify(reqBody),
    headers: {
      'Content-Type': 'application/json; charset=utf8',
    },
    method: 'POST',
  });

  if (!res.ok) {
    console.log(res);
    history.forward('/error');
  }

  const data = res.json();

  return data;
}

export async function fetchMovieByRateAndGender(searchRate, searchGender) {
  const reqBody = {
    rate: searchRate * 2,
    genero: searchGender,
  };

  const res = await fetch(`${URL}/${rateAndGenderURL}`, {
    body: JSON.stringify(reqBody),
    headers: {
      'Content-Type': 'application/json; charset=utf8',
    },
    method: 'POST',
  });

  if (!res.ok) {
    console.log(res);
    history.forward('/error');
  }

  const data = res.json();

  return data;
}

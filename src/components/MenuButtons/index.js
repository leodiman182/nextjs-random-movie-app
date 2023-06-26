import {
  fetchMovieByRate,
  fetchgetMovieByGender,
  fetchMovieByRateAndGender,
} from '../../utils/requests';

export const buttons = [
  {
    name: 'By rate',
    func: () => fetchMovieByRate(),
  },
  {
    name: 'By gender',
    func: () => fetchgetMovieByGender(),
  },
  {
    name: 'By rate and gender',
    func: () => fetchMovieByRateAndGender(),
  },
];

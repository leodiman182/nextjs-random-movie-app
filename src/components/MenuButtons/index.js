import {
  fetchMovieByRate,
  fetchMovieByGender,
  fetchMovieByRateAndGender,
} from '../../utils/requests';

export const buttons = [
  {
    name: 'By rate',
    func: () => fetchMovieByRate(),
  },
  {
    name: 'By gender',
    func: () => fetchMovieByGender(),
  },
  {
    name: 'By rate and gender',
    func: () => fetchMovieByRateAndGender(),
  },
];

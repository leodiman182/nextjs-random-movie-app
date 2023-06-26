import { useContext } from 'react';
import Rating from '@mui/material/Rating';
import MainContext from '@/context/MainContext';

export default function RatingComponent() {
  const { searchRate, setSearchRate } = useContext(MainContext);

  return (
    <Rating
      size="large"
      className="border-2 border-gray-100 bg-gray-100 rounded-md my-[10px]"
      name="half-rating"
      value={searchRate}
      onChange={(event, newValue) => {
        setSearchRate(newValue);
      }}
      precision={0.5}
    />
  );
}

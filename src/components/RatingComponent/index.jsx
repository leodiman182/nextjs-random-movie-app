import { useContext } from 'react';
import Rating from '@mui/material/Rating';
import MainContext from '@/context/MainContext';

export default function RatingComponent() {
  const { searchRate, setSearchRate } = useContext(MainContext);

  return (
    <Rating
      size="large"
      className="border-2 border-slate-100 bg-slate-100 rounded-md my-[25px] lg:my-[10px] mx-auto scale-[150%] lg:scale-[125%]"
      name="half-rating"
      value={searchRate}
      onChange={(event, newValue) => {
        setSearchRate(newValue);
      }}
      precision={0.5}
    />
  );
}

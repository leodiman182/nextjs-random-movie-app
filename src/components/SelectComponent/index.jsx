import MainContext from '@/context/MainContext';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useContext } from 'react';

export default function SelectComponent() {
  const {
    searchGender,
    setSearchGender,
    // genderOptions
  } = useContext(MainContext);

  const handleChange = (e) => {
    setSearchGender(e.target.value);
  };

  const genderOptions = [
    'genre1',
    'genre2',
    'genre3',
    'genre4',
    'genre5',
    'genre6',
    'genre7',
  ];

  return (
    <div>
      <select
        onChange={handleChange}
        className="my-[10px] block rounded-md py-[10px] pl-3 pr-10 bg-transparent text-white border-[1px] border-primary text-[20px] mx-auto w-[195px]"
        defaultValue=""
      >
        <option value="" disabled>
          Select a gender
        </option>
        {genderOptions !== [] &&
          genderOptions.map((el, index) => (
            <option key={index} value={el}>
              {el.charAt(0).toUpperCase() + el.slice(1)}
            </option>
          ))}
      </select>
    </div>
  );
}

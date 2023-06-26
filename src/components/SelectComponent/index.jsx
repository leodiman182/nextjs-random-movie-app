import MainContext from '@/context/MainContext';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useContext } from 'react';

export default function SelectComponent() {
  const { searchGender, setSearchGender, genderOptions } =
    useContext(MainContext);

  const handleChange = (e) => {
    setSearchGender(e.target.value);
  };

  console.log(genderOptions);

  return (
    <div>
      <select
        onChange={handleChange}
        className="my-[10px] block w-full rounded-md border-0 py-[10px] pl-3 pr-10 bg-transparent text-white"
        defaultValue=""
      >
        <option value="" disabled>
          Select a gender
        </option>
        {/* {genderOptions !== [] &&
          genderOptions.map((el, index) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))} */}
        <option value="">Canada</option>
        <option value="">Mexico</option>
      </select>
    </div>
  );
}

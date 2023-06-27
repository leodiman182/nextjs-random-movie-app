import { useContext, useEffect, useState } from 'react';
import MainContext from '@/context/MainContext';

export default function SelectComponent() {
  const { setSearchGender, genderOptions } = useContext(MainContext);

  const [renderedOptions, setRenderedOptions] = useState([]);

  useEffect(() => {
    genderOptions.length >= 1 && setRenderedOptions(genderOptions);
  }, [genderOptions]);

  const handleChange = (e) => {
    setSearchGender(e.target.value);
  };

  return (
    <div>
      {renderedOptions.length >= 1 && (
        <select
          onChange={handleChange}
          className="my-[10px] block rounded-md py-[10px] pl-3 pr-10 bg-transparent text-white border-[1px] border-primary text-[20px] lg:text-base mx-auto w-[227px] lg:w-[195px]"
          defaultValue=""
        >
          <option value="" disabled>
            Select a gender
          </option>
          {genderOptions.map((el, index) => (
            <option
              className="bg-black hover:bg-primary"
              key={index}
              value={el}
            >
              {el.charAt(0).toUpperCase() + el.slice(1)}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

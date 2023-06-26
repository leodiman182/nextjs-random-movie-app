import { useState } from 'react';
import MainContext from './MainContext';

export default function MainProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [randomMovie, setRandomMovie] = useState({});

  const [rateModalOpen, setRateModalOpen] = useState(false);
  const [genderModalOpen, setGenderModalOpen] = useState(true);
  const [rateAndGenderModalOpen, setRateAndGenderModalOpen] = useState(false);

  const [searchRate, setSearchRate] = useState(0);
  const [genderOptions, setGenderOptions] = useState([]);
  const [searchGender, setSearchGender] = useState('');

  const context = {
    // randomMovie
    randomMovie,
    setRandomMovie,

    // loading
    loading,
    setLoading,

    // modals
    rateModalOpen,
    setRateModalOpen,
    genderModalOpen,
    setGenderModalOpen,
    rateAndGenderModalOpen,
    setRateAndGenderModalOpen,

    // searchParams
    genderOptions,
    setGenderOptions,
    searchRate,
    setSearchRate,
    searchGender,
    setSearchGender,
  };

  return (
    <MainContext.Provider value={context}>{children}</MainContext.Provider>
  );
}

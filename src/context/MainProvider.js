import { useState } from 'react';
import MainContext from './MainContext';

export default function MainProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [randomMovie, setRandomMovie] = useState({});

  const context = {
    loading,
    setLoading,
    randomMovie,
    setRandomMovie,
  };

  return (
    <MainContext.Provider value={context}>{children}</MainContext.Provider>
  );
}

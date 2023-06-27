/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import Loading from '../Loading';
import MainContext from '@/context/MainContext';
import { useRouter } from 'next/navigation';
import Illustration from '../Illustrations/Illustration';
import { fetchRandomMovie, fetchGenreOptions } from '@/utils/requests';
import ByRateModal from '../Modals/ByRateModal';
import ByGenderModal from '../Modals/ByGenderModal';
import ByRateAndGenderModal from '../Modals/ByRateAndGenderModal';

export default function MainCard() {
  const router = useRouter();
  const {
    loading,
    setLoading,
    setRandomMovie,
    rateModalOpen,
    setRateModalOpen,
    genderModalOpen,
    setGenderOptions,
    setGenderModalOpen,
    rateAndGenderModalOpen,
    setRateAndGenderModalOpen,
  } = useContext(MainContext);

  const buttons = [
    {
      name: 'By rate',
      func: () => setRateModalOpen(!rateModalOpen),
    },
    {
      name: 'By gender',
      func: () => setGenderModalOpen(!genderModalOpen),
    },
    {
      name: 'By rate and gender',
      func: () => setRateAndGenderModalOpen(!rateAndGenderModalOpen),
    },
  ];

  async function getRandomMovie() {
    setLoading(true);
    router.push('/movie');

    fetchRandomMovie().then((res) => {
      setRandomMovie(res);
      setLoading(false);
    });
  }

  useEffect(() => {
    async function getGenderOptions() {
      fetchGenreOptions().then((res) => setGenderOptions(res));
    }

    getGenderOptions();
  }, []);

  return (
    <>
      <ByRateModal />
      <ByGenderModal />
      <ByRateAndGenderModal />
      <article className="bg-black py-[30px] px-[20px] lg:px-[20px] lg:py-[50px] lg:pt-[15px] rounded-md text-center lg:w-[475px]">
        <div className="mt-[15px] text-[24px] lg:text-[26px] w-full flex flex-col items-center">
          <Illustration />
        </div>
        {!loading ? (
          <button
            onClick={() => getRandomMovie()}
            className="bg-primary rounded-md py-[10px] px-[10px] lg:px-[40px] text-white lg:text-[28px] my-[30px] opacity-80 hover:opacity-100 hover:bg-white hover:text-primary font-bold duration-150"
          >
            Surprise me!
          </button>
        ) : (
          <Loading />
        )}

        <div className="flex flex-col w-full">
          {buttons.map((el, index) => (
            <button
              className="lg:w-3/4 bg-black border-2 border-white my-[8px] lg:my-[6px] py-[4px] rounded-md text-secondary font-bold lg:text-[20px] lg:mx-auto lg:opacity-70 hover:opacity-100 hover:border-secondary hover:bg-secondary hover:text-black duration-150"
              key={index}
              onClick={el.func}
            >
              {el.name}
            </button>
          ))}
        </div>
      </article>
    </>
  );
}

import { useContext } from 'react';
import Loading from '../Loading';
import MainContext from '@/context/MainContext';
import { URL } from '../../utils/api';
import { useRouter } from 'next/navigation';
import Illustration from '../Illustration';
import { buttons } from '../MenuButtons';
import { getRandomMovie } from '../../utils/requests';
import testFetch from '../MenuButtons';

export default function MainCard() {
  const router = useRouter();
  const { loading, setLoading, setRandomMovie } = useContext(MainContext);

  // async function getRandomMovie() {
  //   setLoading(true);
  //   axios.get(`${URL}/gerar_aleatorio`).then((res) => {
  //     setLoading(false);
  //     setRandomMovie(res.data);
  //     router.push('/movie');
  //   });
  // }

  return (
    <article className="bg-black py-[30px] px-[20px] lg:px-[20px] lg:py-[50px] lg:pt-[15px] rounded-md text-center lg:w-[475px]">
      <div className="my-[15px] text-[24px] lg:text-[26px] w-full flex flex-col items-center">
        <Illustration />
      </div>
      {!loading ? (
        <button
          onClick={() => testFetch()}
          className="bg-primary rounded-md py-[10px] px-[10px] lg:px-[40px] text-white lg:text-[28px] my-[24px] opacity-80 hover:opacity-100 hover:bg-white hover:text-primary font-bold duration-150"
        >
          Surprise me!
        </button>
      ) : (
        <Loading />
      )}

      <div className="flex flex-col w-full">
        {buttons.map((el, index) => (
          <button
            className="lg:w-3/4 bg-black border-2 border-secondary my-[8px] lg:my-[6px] py-[4px] rounded-md text-secondary lg:text-[20px] lg:mx-auto lg:opacity-70 hover:opacity-100 hover:bg-secondary hover:text-black duration-150 hover:scale-110"
            key={index}
            onClick={el.func}
          >
            {el.name}
          </button>
        ))}
      </div>
    </article>
  );
}

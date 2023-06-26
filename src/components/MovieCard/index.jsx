import { mockRandomMovie } from '@/mocks/randomMovie';
import Image from 'next/image';
import { imageURL } from '@/utils/api';
import BackButton from '../BackButton';
import { useContext } from 'react';
import MainContext from '@/context/MainContext';
import Loading from '../Loading';

export default function MovieCard() {
  const { randomMovie, loading, setLoading } = useContext(MainContext);

  const { tagline, poster_path, title, overview, release_date } = randomMovie;

  const year = !loading && release_date.split('-', 1);

  return loading ? (
    <Loading />
  ) : (
    <article className="bg-black pb-[30px] lg:p-[70px] rounded-md text-center lg:w-[550px] max-h-[600px] overflow-auto hide-scroll ">
      <section className="relative">
        <div className="absolute top-0 bg-gradient-to-b from-transparent via-transparent to-black to-99% z-10 h-[600px] w-full"></div>
        <Image
          className="rounded-md h-[600px] w-full object-cover mx-auto absolute top-0"
          width={500}
          height={500}
          src={`${imageURL}/${poster_path}`}
          alt={title}
        />
      </section>
      <section className="mt-[630px] px-[30px] lg:px-0">
        <div className="bg-gray-50 duration-150rounded-md border-dotted border-[8px] border-primary text-black py-[20px] px-[20px] lg:px-[10px] my-[40px]">
          <h3 className="title text-[30px] text-center border-b-2">{title}</h3>
          <p className="text-[16px] mt-[5px]">{tagline}</p>
        </div>
        <p className="mt-[30px] text-[20px]">
          {overview} <br />
          <span className="title text-secondary">{year}</span>
        </p>
      </section>
      <footer className="w-full px-[40px] lg:px-0 pt-[30px]">
        <BackButton />
      </footer>
    </article>
  );
}

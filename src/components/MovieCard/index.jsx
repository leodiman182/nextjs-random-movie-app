import { mockRandomMovie } from '@/mocks/randomMovie';
import Image from 'next/image';
import { imageURL } from '@/utils/api';
import BackButton from '../BackButton';
import { useContext } from 'react';
import MainContext from '@/context/MainContext';

export default function MovieCard() {
  const { title, release_date, overview, tagline, poster_path } =
    mockRandomMovie;

  const year = release_date.split('-', 1);
  // const { randomMovie } = useContext(MainContext);

  return (
    <article className="bg-black pb-[30px] lg:p-[75px] lg:pt-0 rounded-md text-center lg:w-[550px] max-h-[600px] overflow-auto hide-scroll">
      <header className="w-full px-[40px] lg:px-0 py-[20px]">
        <BackButton />
      </header>
      <div className="mt-[50px] lg:mt-[20px] relative">
        <div className="absolute -top-[550px] bg-gradient-to-b from-transparent via-transparent to-black to-99% z-10 h-[550px] w-full"></div>
        <Image
          className="rounded-md h-[550px] w-full object-cover mx-auto absolute -top-[550px]"
          width={500}
          height={500}
          src={`${imageURL}/${poster_path}`}
          alt={title}
        />
        <article className="mt-[550px] px-[30px] lg:px-0">
          <div className="bg-gray-50 duration-150 hover:bg-secondary rounded-md border-dotted border-[8px] border-primary text-black py-[20px] px-[20px] lg:px-[10px] my-[40px]">
            <h3 className="title text-[28px] text-center border-b-2">
              {title}
            </h3>
            <p className="text-[14px] mt-[5px]">{tagline}</p>
          </div>
          <p className="mt-[40px] text-[18px]">
            {overview} | {year}
          </p>
        </article>
      </div>
    </article>
  );
}

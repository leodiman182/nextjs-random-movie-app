import Link from 'next/link';
import { AiOutlineLeft } from 'react-icons/ai';
import { mockRandomMovie } from '@/mocks/randomMovie';
import Image from 'next/image';
import { imageURL } from '@/utils/api';

export default function MovieCard() {
  const { title, release_date, overview, tagline, poster_path } =
    mockRandomMovie;

  const year = release_date.split('-', 1);

  return (
    <article className="bg-black pb-[30px] lg:p-[75px] lg:pt-0 rounded-md text-center lg:w-[550px] max-h-[600px] overflow-auto hide-scroll">
      <header className="w-full px-[40px] lg:px-0 py-[20px]">
        <Link href="/">
          <button className="flex flex-row items-center hover:bg-secondary rounded-full py-[10px] px-[10px] pr-[20px] hover:scale-110 duration-150 hover:first:fill-black hover:text-black">
            <AiOutlineLeft className="mr-[6px]" size={'2em'} />
            BACK
          </button>
        </Link>
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
            <p className="text text-[14px] mt-[5px]">{tagline}</p>
          </div>
          <p className="text mt-[40px] text-[18px]">
            {overview} | {year}
          </p>
        </article>
      </div>
    </article>
  );
}

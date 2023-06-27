import { mockRandomMovie } from '@/mocks/randomMovie';
import Image from 'next/image';
import { imageURL } from '@/utils/api';
import BackButton from '../BackButton';
import { useContext } from 'react';
import MainContext from '@/context/MainContext';
import Loading from '../Loading';
import { Rating } from '@mui/material';

export default function MovieCard() {
  const { randomMovie, loading } = useContext(MainContext);

  const {
    tagline,
    poster_path,
    title,
    overview,
    release_date,
    genres,
    vote_average,
  } = randomMovie;

  const year = !loading && release_date.split('-', 1);

  return loading ? (
    <Loading />
  ) : (
    <>
      <article className="lg:hidden bg-black p-[10px] pb-[30px]  rounded-md text-center max-h-[600px] overflow-auto hide-scroll ">
        <section className="w-full">
          <div className="bg-gray-50 duration-150rounded-md border-dotted border-[8px] border-primary text-black py-[10px] px-[20px]">
            <h3 className="title text-[20px] text-center border-b-2">
              {title}
            </h3>
          </div>
          <p className="my-[15px]">{tagline}</p>
          <Image
            className="rounded-md w-full object-cover mx-auto"
            width={500}
            height={500}
            src={`${imageURL}/${poster_path}`}
            alt={title}
          />
        </section>
        <section className="mt-[20px] px-[30px] ">
          <span className="title text-secondary text-[22px]">{year} </span>
          <p>
            {overview} <br />
          </p>
        </section>
        <footer className="w-full px-[40px] pt-[30px]">
          <BackButton />
        </footer>
      </article>

      <article className="hidden lg:flex flex-col bg-black p-[20px] rounded-md text-center w-[1024px] max-h-[700px]">
        <header className="w-full pb-[10px]">
          <BackButton />
        </header>
        <main className="w-full flex flex-row h-full">
          <aside className="w-1/3">
            <Image
              height={3000}
              width={3000}
              className="rounded-md w-full max-h-[575px] object-cover mx-auto"
              src={`${imageURL}/${poster_path}`}
              alt={title}
            />
          </aside>
          <article className="w-2/3 flex flex-col items-center px-[40px]">
            <section>
              <div className="bg-gray-50 rounded-md border-dotted border-[8px] border-primary text-black py-[10px] px-[20px] lg:px-[10px]">
                <h3 className="title text-[20px] lg:text-[30px] text-center border-b-2">
                  {title}
                </h3>
              </div>
              <p className="my-[10px]">{tagline}</p>
            </section>
            <section className="flex flex-row">
              <div className="mr-[40px]">
                Release date:
                <p className="title text-secondary text-[28px] -mt-[10px]">
                  {year}
                </p>
              </div>
              <div>
                Rating:
                <div className="flex flex-row items-center font-bold justify-center">
                  <Rating
                    precision={0.5}
                    name="simple-controlled"
                    value={vote_average / 2}
                    readOnly
                  />
                  {vote_average}
                </div>
              </div>
            </section>
            <section className="flex flex-row justify-center mt-[20px]">
              {genres.map((el) => (
                <p
                  key={el.id}
                  className="text-primary text-[16px] rounded border-[1px] border-primary py-[2px] px-[6px] hover:bg-primary hover:cursor-default font-bold duration-150 hover:text-black mx-[5px]"
                >
                  {el.name}
                </p>
              ))}
            </section>
            <section className="">
              <p className="text-left text-[18px] overflow-auto h-[230px] mt-[20px] hide-scroll">
                {overview} <br />
              </p>
            </section>
          </article>
        </main>
      </article>
    </>
  );
}

import { mockRandomMovie } from '@/mocks/randomMovie';
import Image from 'next/image';
import { imageURL } from '@/utils/api';
import BackButton from '../BackButton';
import { useContext } from 'react';
import MainContext from '@/context/MainContext';
import Loading from '../Loading';
import { Rating, Tooltip, Zoom } from '@mui/material';
import { HiRefresh } from 'react-icons/hi';
import Illustration2 from '../Illustrations/Illustration2';

export default function MovieCard() {
  const { randomMovie, loading, searchRate, searchGender } =
    useContext(MainContext);

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

  async function refreshSearch() {
    if (searchGender.length === 0 && searchRate > 0) {
      console.log('rebuscar por rating');
    } else if (!searchRate && searchGender.length > 0) {
      console.log('rebuscar por gender');
    } else if (searchRate > 0 && searchGender.length > 0) {
      console.log('rebuscar pelos 2');
    } else {
      console.log('random');
    }

    console.log(searchRate * 2, searchGender);
  }

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

      <article className="hidden lg:flex flex-col bg-black p-[20px] rounded-md text-center w-[1024px] max-h-[700px] relative">
        <div className="absolute bottom-[20px] right-[20px]">
          <Tooltip title="Do it again!" arrow TransitionComponent={Zoom}>
            <button
              id="refresh-button"
              onClick={() => refreshSearch()}
              className="rounded-full p-[8px] text-white opacity-100  hover:bg-secondary hover:text-black font-bold duration-150 text-[24px]"
            >
              <HiRefresh />
            </button>
          </Tooltip>
        </div>
        <header className="w-full pb-[10px]">
          <BackButton />
        </header>
        <main className="w-full flex flex-row h-full">
          <aside className="w-1/3">
            {poster_path !== '' ? (
              <Image
                height={3000}
                width={3000}
                className="rounded-md w-full max-h-[575px] object-cover mx-auto"
                src={`${imageURL}/${poster_path}`}
                alt={title}
              />
            ) : (
              <div className="h-full flex flex-col items-center justify-center">
                <p className="mb-[50px] text-[20px]">
                  Sorry, image not found :(
                </p>
                <Illustration2 />
              </div>
            )}
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
            <section className="flex flex-row items-center">
              <div className="mr-[40px]">
                Release date:
                <p className="title text-secondary text-[28px] -mt-[10px]">
                  {year}
                </p>
              </div>
              <div className="mr-[40px]">
                Rating:
                <div className="flex flex-row items-center font-bold justify-center">
                  <Rating
                    sx={{
                      marginRight: '4px',
                    }}
                    precision={0.5}
                    name="simple-controlled"
                    value={vote_average / 2}
                    readOnly
                  />
                  {vote_average.toFixed(2)}
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

import { useContext, useState } from 'react';
import Loading from '../Loading';
import MainContext from '@/context/MainContext';

export default function MainCard() {
  const { loading, setLoading } = useContext(MainContext);

  const buttons = [
    {
      name: 'By rate',
      func: func(),
    },
    {
      name: 'By gender',
      func: func(),
    },
    {
      name: 'By rate and gender',
      func: func(),
    },
  ];

  function func() {
    console.log('oi');
  }

  return (
    <article className="bg-black py-[30px] px-[20px] lg:p-[50px] rounded-md text-center lg:w-[500px]">
      <h3 className="text my-[15px] text-[24px] lg:text-[30px]">
        Use the app to get a random movie
      </h3>
      {!loading ? (
        <button className="text bg-primary rounded-md py-[10px] px-[20px] lg:px-[40px] text-white lg:text-[28px] my-[28px] opacity-80 hover:opacity-100 hover:bg-white hover:text-primary hover:scale-110 duration-150">
          Surprise me!
        </button>
      ) : (
        <Loading />
      )}

      <div className="flex flex-col w-full">
        {buttons.map((el, index) => (
          <button
            className="lg:w-3/4 bg-black border-2 border-secondary my-[8px] lg:my-[12px] py-[6px] rounded-md text-secondary lg:text-[20px] lg:mx-auto lg:opacity-70 hover:opacity-100 hover:bg-secondary hover:text-black duration-150"
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

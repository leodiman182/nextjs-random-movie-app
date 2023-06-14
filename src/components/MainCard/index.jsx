export default function MainCard() {
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
      <button className="text bg-primary rounded-md py-[10px] px-[20px] lg:px-[40px] text-white lg:text-[28px] my-[50px] opacity-80 hover:opacity-100 duration-150">
        Surprise me!
      </button>
      <div className="flex flex-col w-full">
        {buttons.map((el, index) => (
          <button
            className="lg:w-3/4 bg-secondary my-[8px] lg:my-[12px] py-[6px] rounded-md text-black lg:text-[20px] lg:mx-auto lg:opacity-80 hover:opacity-100 duration-150"
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

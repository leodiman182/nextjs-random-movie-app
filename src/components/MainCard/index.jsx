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
    <article className="bg-black opacity-70 p-[50px] rounded-md">
      <h3></h3>
      <button></button>
      <div>
        {buttons.map((el, index) => (
          <button className="" key={index} onClick={el.func}>
            {el.name}
          </button>
        ))}
      </div>
    </article>
  );
}

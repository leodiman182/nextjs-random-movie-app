export default function Footer() {
  return (
    <footer className="text-white text-[12px] lg:text-[14px] py-[8px] title w-full h-[10vh] text-center flex flex-col justify-center bg-gradient-to-t from-black to-transparent">
      <section className="flex flex-row w-full justify-evenly">
        <div>
          <span className="">Written by</span>
          <p className="text-[20px] lg:text-[36px] my-text-shadow -mt-[2px] lg:-mt-[10px]">
            Thiago Direnzi
          </p>
        </div>
        <div>
          <span className="">Directed by</span>
          <p className="text-[20px] lg:text-[36px] my-text-shadow -mt-[2px] lg:-mt-[10px]">
            Leonardo Diman
          </p>
        </div>
      </section>
    </footer>
  );
}

// import Link from 'next/link';
import Image from 'next/image';
import icon from '../../assets/popcorn-icon.png';

export default function Header() {
  return (
    <header className="text-white lg:pt-[28px] flex flex-row items-center h-[10vh] px-[20px] lg:px-[30px]">
      <div className="mx-auto flex flex-row items-center lg:px-[30px] rounded-md">
        <Image className="w-[28px] lg:w-[50px]" src={icon} alt="Popcorn Icon" />
        <h2 className="title mx-[10px] lg:mx-[30px] text-[24px] lg:text-[48px] my-text-shadow">
          Random Movie App
        </h2>
        <Image className="w-[28px] lg:w-[50px]" src={icon} alt="Popcorn Icon" />
      </div>
    </header>
  );
}

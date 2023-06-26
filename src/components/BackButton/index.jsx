import Link from 'next/link';
import { AiOutlineLeft } from 'react-icons/ai';

export default function BackButton() {
  return (
    <Link href="/">
      <button className="flex flex-row items-center hover:bg-secondary rounded-full py-[10px] px-[10px] pr-[20px] hover:scale-110 duration-150 hover:first:fill-black hover:text-black">
        <AiOutlineLeft className="mr-[6px]" size={'2em'} />
        BACK
      </button>
    </Link>
  );
}

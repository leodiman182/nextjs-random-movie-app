import Link from 'next/link';
import { AiFillCaretLeft } from 'react-icons/ai';
export default function BackButton() {
  return (
    <Link href="/">
      <button className="flex flex-row items-center hover:bg-secondary rounded-md py-[4px] px-[15px] pl-[10px]  duration-150 hover:first:fill-black hover:text-black font-bold title">
        <AiFillCaretLeft className="mr-[2px]" size={'1em'} />
        BACK
      </button>
    </Link>
  );
}

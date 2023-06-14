import MainCard from '@/components/MainCard';
import { useEffect } from 'react';

export default function Home({ data }) {
  useEffect(() => {});

  return (
    <main className="text-white px-[30px] lg:px-0 py-[40px] max-w-[1080px] mx-auto h-[80vh] flex flex-col items-stretch lg:items-center justify-center">
      <MainCard />
    </main>
  );
}

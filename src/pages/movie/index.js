import MovieCard from '@/components/MovieCard';

export default function Home({ data }) {
  return (
    <main className="text-white px-[30px] lg:px-0 py-[40px] max-w-[1080px] mx-auto h-[80vh] flex flex-col items-stretch lg:items-center justify-center">
      <MovieCard />
    </main>
  );
}

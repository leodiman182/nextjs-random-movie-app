import BackButton from '@/components/BackButton';

export default function ErrorPage() {
  return (
    <main className="text-white px-[30px] lg:px-0 py-[40px] max-w-[1080px] mx-auto h-[80vh] flex flex-col items-stretch lg:items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p className="text-base font-semibold leading-8 text-secondary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl title">
          Page not found
        </h1>
        <p className="mt-4 text-base text-white/70 sm:mt-6">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex justify-center">
          <BackButton />
        </div>
      </div>
    </main>
  );
}

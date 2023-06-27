import { Fragment, useContext, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import MainContext from '@/context/MainContext';
import { AiFillCloseCircle } from 'react-icons/ai';
import RatingComponent from '@/components/RatingComponent';

export default function ByRateModal() {
  const { rateModalOpen, setRateModalOpen, searchRate } =
    useContext(MainContext);

  return (
    <Transition.Root show={rateModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setRateModalOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-primary bg-opacity-30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-none"
                    onClick={() => setRateModalOpen(false)}
                  >
                    <AiFillCloseCircle
                      className="h-[30px] w-[30px] bg-black fill-red-300 hover:fill-red-600 duration-150"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="sm:flex sm:items-start w-full">
                  <div className="mt-[50px] text-center w-full">
                    <Dialog.Title
                      as="h3"
                      className="title text-[30px] font-semibold leading-6 text-primary"
                    >
                      Search by Rate
                    </Dialog.Title>
                    <div className="mt-[30px] flex flex-col items-center">
                      <RatingComponent />
                      {searchRate !== 0 ? (
                        <div className="h-[72px] flex flex-col justify-end">
                          <p className="text text-gray-200 text-[20px]">
                            Search for{' '}
                            <span className="title text-secondary text-[36px]">
                              {searchRate * 2}
                            </span>{' '}
                            star{searchRate * 2 > 1 ? 's' : ''} rated movies
                          </p>
                        </div>
                      ) : (
                        <div className="h-[72px] flex flex-col justify-end">
                          <p className="text text-gray-200 text-[20px]">
                            <span className="title text-secondary text-[36px] -mr-[4px]">
                              S
                            </span>{' '}
                            elect the rate you want to search
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setRateModalOpen(false)}
                    className="bg-green-800 rounded-md py-[10px] px-[20px] text-white text-[20px] mt-[24px] opacity-80 hover:opacity-100 hover:bg-green-600 font-bold duration-150"
                  >
                    Surprise me!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

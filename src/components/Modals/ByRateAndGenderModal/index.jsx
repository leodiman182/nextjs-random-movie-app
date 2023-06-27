import { Fragment, useContext, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import MainContext from '@/context/MainContext';
import { AiFillCloseCircle } from 'react-icons/ai';
import SelectComponent from '@/components/SelectComponent';
import Loading from '@/components/Loading';
import RatingComponent from '@/components/RatingComponent';

export default function ByRateAndGenderModal() {
  const { rateAndGenderModalOpen, setRateAndGenderModalOpen, genderOptions } =
    useContext(MainContext);

  return (
    <Transition.Root show={rateAndGenderModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={setRateAndGenderModalOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-primary bg-opacity-30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black  px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-none"
                    onClick={() => setRateAndGenderModalOpen(false)}
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
                      Search by Rate and Gender
                    </Dialog.Title>
                    <div className="my-[20px] flex flex-col justify-center w-full">
                      <RatingComponent />
                      {genderOptions !== [] ? <SelectComponent /> : <Loading />}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setRateAndGenderModalOpen(false)}
                    className="bg-green-800 rounded-md py-[10px] px-[20px] text-white text-[20px] opacity-80 hover:opacity-100 hover:bg-green-600 font-bold duration-150"
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

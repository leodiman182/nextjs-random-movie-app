import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Image from 'next/image';
import backgroundImg from '../../assets/backgroundcine.png';

const MainLayout = ({ children }) => {
  return (
    <main className="relative">
      <Image
        className="absolute top-0 left-0 h-screen w-full object-cover"
        src={backgroundImg}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-80" />
      <div className="absolute top-0 left-0 w-full h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;

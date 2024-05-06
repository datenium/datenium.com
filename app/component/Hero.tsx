import Link from "next/link";
import Button from "./Button";
import React from 'react';

const HeroSection = () => {
  return (
    // <div className="min-h-screen-780 flex flex-col items-center justify-center p-4 bg-te">
    //   <span className=" flex flex-col items-left justify-center mx-auto">
    //     <h2 className="font-bold text-center text-3xl lg:text-3xl xl:text-5xl">Unleashing Future Data, Today.</h2>
    //     <div className="p-4 text-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
    //       Datenium is a software development company focused on creating <br /> customized high-performance solutions.
    //     </div>
    //   </span>
    //   <div>
    //     <Button className=" hover:scale-110 hover:bg-indigo-500 duration-300 my-10"> 
    //     <Link href="/contacts">Contact us</Link>
    //     </Button>
    //   </div>
    // </div>
    <>
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-[('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80')]">
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 "></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="font-semibold text-5xl">
                Unleashing Future Ideas, Today.
                </h1>
                <p className="mt-4 text-2xl text-blueGray-200">
                Datenium is a software development company focused on creating customized high-performance solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>

    </>
  );
};

export default HeroSection;

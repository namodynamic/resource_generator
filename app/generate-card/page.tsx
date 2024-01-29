"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const GenerateCard = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section className="flex justify-between  gap-[57px] p-5 lg:mx-[81px] lg:my-[64px]">
      <div className="flex h-[741px] max-w-[582px] flex-1 flex-col items-start justify-center bg-white px-[56px] py-[61px]">
        <div className="flex-1  flex-col">
          <Link
            href="/"
            className="font-Onest text-base font-normal text-gray-900"
          >
            Go Back
          </Link>
          <h3 className="mt-4 font-Onest text-2xl font-bold text-gray-900">
          Select a Template
          </h3>
          <div
            className={`mt-6 flex w-full items-center gap-[19px] rounded-sm border bg-blue-100 bg-opacity-40 p-4 px-10 py-[15px] ${isClicked ? "border-[2px] border-solid focus:border-blue-500" : ""}`}
            role="button"
            tabIndex={0}
            onClick={() => {
              setIsClicked(true);
            }}
            onBlur={() => {
              setIsClicked(false);
            }}
          >
            <Image
              src="/tempicon.svg"
              alt="logo"
              width={18}
              height={18}
              className="object-contain"
            />

            <p className="py-[15px] pl-[18px] pr-[127px] font-Onest text-base font-normal text-gray-900">
            Invitation Card
            </p>
          </div>
          <div
            className={`mt-6 flex w-full items-center gap-[19px] rounded-sm border bg-blue-100 bg-opacity-40 p-4 px-10 py-[15px] ${isClicked ? "border-[2px] border-solid focus:border-blue-500" : ""}`}
            role="button"
            tabIndex={0}
            onClick={() => {
              setIsClicked(true);
            }}
            onBlur={() => {
              setIsClicked(false);
            }}
          >
            <Image
              src="/tempicon.svg"
              alt="logo"
              width={18}
              height={18}
              className="object-contain"
            />

            <p className="py-[15px] pl-[18px] pr-[127px] font-Onest text-base font-normal text-gray-900">
            Thank you card for Giving
            </p>
          </div>
          <div
            className={`mt-6 flex w-full items-center gap-[19px] rounded-sm border bg-blue-100 bg-opacity-40 p-4 px-10 py-[15px] ${isClicked ? "border-[2px] border-solid focus:border-blue-500" : ""}`}
            role="button"
            tabIndex={0}
            onClick={() => {
              setIsClicked(true);
            }}
            onBlur={() => {
              setIsClicked(false);
            }}
          >
            <Image
              src="/tempicon.svg"
              alt="logo"
              width={18}
              height={18}
              className="object-contain"
            />

            <p className="py-[15px] pl-[18px] pr-[127px] font-Onest text-base font-normal text-gray-900">
            Thank you Card for Serving
            </p>
          </div>
        </div>
        <div className="inline-flex items-start gap-10 bg-red-500 p-4 md:px-[55px] md:py-[16px]">
          <button className="font-Onest text-base font-medium text-white">
            Process
          </button>
        </div>
      </div>

      <div className="h-[760px] max-w-[586px] flex-1 flex-col items-center bg-white">
        <h3 className="mt-12 flex flex-col  font-Onest font-bold sm:w-[600px] ">
          Letter
        </h3>
      </div>
    </section>
  );
};

export default GenerateCard;

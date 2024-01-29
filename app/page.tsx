"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (page: string) => {
    setIsClicked(true);
    setTimeout(() => {
      router.push(`/${page}`);
    }, 300);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  return (
    <section className="flex justify-center lg:my-[64px] lg:mx-[81px] p-5 items-center bg-white flex-1  flex-col">
      <Image src="/icon1.svg" alt="logo" width={42} height={53} />

      <h1 className="flex flex-col mt-12 text-center sm:w-[600px] font-Onest font-bold text-4xl sm:text-6xl">
        What will you like to Generate today?
      </h1>
      <div className="flex flex-col sm:flex-row mt-12 gap-[23px]">
        <div
          role="button"
          className={`flex flex-col border p-[54px] gap-[24px] justify-center items-center transition duration-300 ease-in-out ${
            isClicked ? "focus:border-red-500 border-solid border-[3px]" : ""
          }`}
          tabIndex={0}
          onClick={() => handleClick('letter-template')}
          onBlur={handleBlur}
        >
          <Image src="/letter.jpg" alt="letter icon" width={64} height={64} />
          <h3 className="text-center font-Onest font-bold text-lg">
            Professional Letter
          </h3>
        </div>
        <div
          role="button"
          className={`flex flex-col border p-[54px] gap-[24px] justify-center items-center transition duration-300 ease-in-out ${
            isClicked ? "focus:border-red-500 border-solid border-[3px]" : ""
          }`}
          tabIndex={0}
          onClick={() => handleClick("generate-card")}
          onBlur={handleBlur}
        >
          <Image src="/card.jpg" alt="letter icon" width={64} height={64} />
          <h3 className="text-center font-Onest font-bold text-lg">
            Generate Cards
          </h3>
        </div>
      </div>
    </section>
  );
}

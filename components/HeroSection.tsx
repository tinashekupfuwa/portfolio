import * as React from "react";
import Link from "next/link";
import { DateTimeDisplay } from "./DateTimeDisplay";

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-10 text-center">
      <div className="flex-1 flex flex-col">
        <h1 className="text-9xl font-semibold leading-[113px] max-md:text-4xl max-md:leading-10 text-[#4A4A4A] dark:text-white">
          I design, <br />
          develop and bring
          <br />
          your projects to life.
        </h1>
        <div className="mt-8">
          <DateTimeDisplay />
        </div>
      </div>
      <Link href="/coming-soon" className="button-hover">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9289488dc1ef28d6224f90e183d06ac68e252586595c2e7573694c7d7372e89?placeholderIfAbsent=true&apiKey=a340d4dfbd1d4096868f647ca066fbe1"
          alt="Click to learn more"
          className="object-contain shrink-0 max-w-full aspect-square w-[120px] cursor-pointer pulse-animation"
        />
      </Link>
    </section>
  );
};

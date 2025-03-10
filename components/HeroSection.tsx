import * as React from "react";
import Link from "next/link";
import { DateTimeDisplay } from "./DateTimeDisplay";

interface HeroSectionProps {
  imageSrc: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ imageSrc }) => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-10 text-center">
      <div className="flex-1 flex flex-col">
        <h1 className="text-9xl font-semibold leading-[113px] max-md:text-4xl max-md:leading-10 text-[#4A4A4A] dark:text-white">
          I design, <br />
          develop and bring
          <br />
          your projects to life.
        </h1>
        <DateTimeDisplay />
      </div>
      <Link href="/coming-soon" className="button-hover">
        <img
          src={imageSrc}
          alt="Click to learn more"
          className="object-contain shrink-0 max-w-full aspect-square w-[120px] cursor-pointer pulse-animation"
        />
      </Link>
    </section>
  );
};

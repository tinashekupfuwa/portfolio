"use client";
import * as React from "react";
import { HeroSection } from "./HeroSection";
import { Signature } from "./Signature";

function DesktopHome() {
  return (
    <div className="min-h-screen bg-[#F6F5F5] dark:bg-[#1A1A1A] px-20 pt-48 pb-28 overflow-hidden font-clash max-md:px-5 max-md:pt-25 max-md:pb-25">
      <div className="grid grid-rows-[1fr_auto] h-full place-items-center">
        <div className="flex items-center justify-center w-full">
          <HeroSection imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b9289488dc1ef28d6224f90e183d06ac68e252586595c2e7573694c7d7372e89?placeholderIfAbsent=true&apiKey=a340d4dfbd1d4096868f647ca066fbe1" />
        </div>
        <div className="w-full">
          <Signature />
        </div>
      </div>
    </div>
  );
}

export default DesktopHome;

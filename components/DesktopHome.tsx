"use client";
import * as React from "react";
import { HeroSection } from "./HeroSection";
import { Signature } from "./Signature";

export default function DesktopHome() {
  return (
    <div className="h-screen bg-[#F6F5F5] dark:bg-[#1A1A1A] px-4 sm:px-8 md:px-20 pt-48 pb-28 overflow-hidden font-clash max-md:pt-25 max-md:pb-25">
      <div className="h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <HeroSection />
        </div>
        <div className="flex justify-end">
          <div className="text-[#4A4A4A] dark:text-white text-base font-bold leading-none tracking-[0.8px]">
            <span className="font-normal">MADE BY</span>
            <span> TINASHE KUPFUWA</span>
          </div>
        </div>
      </div>
    </div>
  );
}

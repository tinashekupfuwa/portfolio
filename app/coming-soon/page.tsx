import * as React from "react";
import Link from "next/link";
import { Signature } from "@/components/Signature";

export default function ComingSoon() {
  return (
    <div className="bg-[#F6F5F5] dark:bg-[#1A1A1A] min-h-screen grid grid-cols-1 grid-rows-[1fr_auto] px-20 pt-48 pb-28 overflow-hidden font-clash max-md:px-5 max-md:pt-25 max-md:pb-25">
      <div className="grid place-items-center w-full">
        <div className="grid place-items-center w-full max-w-[1136px] gap-36">
          <h1 className="text-[#4A4A4A] dark:text-white text-[120px] font-semibold leading-none text-center max-md:text-4xl">
            <Link href="/" className="underline-transition attention-draw">
              Site
            </Link>{" "}
            coming soon
          </h1>

          <div className="grid place-items-center w-full max-w-[948px]">
            <div className="grid place-items-center gap-8 text-2xl text-[#4A4A4A] dark:text-white font-medium leading-none">
              <div className="flex items-center gap-3.5 flex-wrap justify-center hover-transition">
                <span>Behance :</span>
                <a
                  href="https://www.behance.net/tinashekupfuwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-transition break-all"
                >
                  https://www.behance.net/tinashekupfuwa
                </a>
              </div>

              <div className="flex items-center gap-3.5 flex-wrap justify-center hover-transition">
                <span>Github :</span>
                <a
                  href="https://github.com/tinashekupfuwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-transition break-all"
                >
                  https://github.com/tinashekupfuwa
                </a>
              </div>

              <div className="flex items-center gap-3.5 flex-wrap justify-center hover-transition">
                <span>X.COM :</span>
                <a
                  href="https://x.com/tinashekupfuwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-transition break-all"
                >
                  https://x.com/tinashekupfuwa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="text-[#4A4A4A] dark:text-white text-base font-bold leading-none tracking-[0.8px]">
          <span className="font-normal">MADE BY</span>
          <span> TINASHE KUPFUWA</span>
        </div>
      </div>
    </div>
  );
}

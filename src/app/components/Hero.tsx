"use client";

import { useState } from "react";

const Hero = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-16 lg:px-8 lg:py-16">
      <div className="hidden sm:mb-8 sm:flex sm:justify-start">
        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          +5000 icons | MIT License | React library
        </div>
      </div>
      <div className="text-left">
        <h1 className="text-xl font-semibold tracking-tight text-balance text-gray-900 sm:text-2xl lg:text-3xl">
          A comprehensive collection of minimalistic SVG icons for{" "}
          <br className="hidden sm:block" /> React and Next.js applications
        </h1>
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 sm:gap-x-6">
          <a
            href="https://github.com/atiqullahsadeqi/react-minimalistic-icons"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-gray-600"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Documentation
          </a>
          <a
            href="https://www.figma.com/community/file/1253623367736500715/5000-icon-set"
            className="inline-flex items-center gap-2 text-sm/6 font-semibold text-gray-900 hover:text-gray-600"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117v-6.038H8.148zm7.704 0h-.002L12.735 8.981v8.98h3.117c2.476 0 4.49-2.014 4.49-4.49s-2.014-4.49-4.49-4.49zm0 7.51h-3.117v-6.038h3.117c1.665 0 3.019 1.355 3.019 3.019s-1.355 3.019-3.019 3.019z" />
            </svg>
            Get Figma File
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;

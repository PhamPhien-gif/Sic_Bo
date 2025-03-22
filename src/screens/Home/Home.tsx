import React from "react";

export const Home = (): JSX.Element => {
  return (
    <section className="flex items-center justify-between px-[148px] pt-[95px]">
      <div className="flex flex-col items-start gap-[75px]">
        <div className="flex flex-col items-start gap-7">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">
              <span className="text-black">Great </span>
              <span className="text-purple-500">Product</span>
              <span className="text-black"> is</span>
            </h2>
            <h2 className="text-5xl font-bold">
              <span className="text-black">built by great </span>
              <span className="text-purple-500">teams</span>
            </h2>
          </div>

          <p className="w-[531px] font-paragraphs-default-lg font-[number:var(--paragraphs-default-lg-font-weight)] text-graygray-700 text-[length:var(--paragraphs-default-lg-font-size)] tracking-[var(--paragraphs-default-lg-letter-spacing)] leading-[var(--paragraphs-default-lg-line-height)] [font-style:var(--paragraphs-default-lg-font-style)]">
            We help build and manage a team of world-class developers to
            bring your vision to life
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <div className="relative w-[614px] h-[546px] bg-[url(/web-development-1.png)] bg-[100%_100%]" />
      </div>
    </section>
  );
};
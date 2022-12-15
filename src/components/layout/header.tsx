import React, { useState } from "react";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="w-full max-w-full min-w-0 xl:pt-[200px]">
      <div className="flex mx-auto xl:max-w-[1280px] ">
        <h1 className=" font-extrabold text-[40px] leading-[1.2] px-[2px] py-[3px] whitespace-pre-wrap">
          {title} OKR
        </h1>
      </div>
    </header>
  );
};

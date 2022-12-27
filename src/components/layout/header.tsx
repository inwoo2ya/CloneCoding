import React, { useEffect, useState } from "react";
import { ReactComponent as GroupOkr } from "../assets/groupOkrIcon.svg";
import { ReactComponent as ChapterOkr } from "../assets/chapterOkrIcon.svg";
interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const [icon, setIcon] = useState(<ChapterOkr />);
  useEffect(() => {
    if (title === "Chapter") {
      setIcon(<ChapterOkr width={78} height={78} className="mb-5" />);
    } else {
      setIcon(<GroupOkr width={78} height={78} className="mb-5" />);
    }
  }, [title]);
  return (
    <header className="w-full maxwidth40 min-w-0 xl:pt-[200px] mx-auto xl:max-w-[1280px]">
      {icon}
      <div className="flex ">
        <h1 className=" font-extrabold text-[40px] leading-[1.2] px-[2px] py-[3px] whitespace-pre-wrap">
          {title} OKR
        </h1>
      </div>
    </header>
  );
};

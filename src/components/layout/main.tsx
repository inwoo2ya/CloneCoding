import { OKRTable } from "../elements/OKRTable";
import React from "react";

interface MainProps {
  title: string;
}
export const Main = ({ title }: MainProps) => {
  const objectHeader = {
    year: "년도",
    quarter: "분기",
    object: "Object(목표)",
    chapter: "Chapter",
    group: "Group",
    achievement: "달성률",
  };
  const keyResultHeader = {
    year: "년도",
    quarter: "분기",
    object: "Object(목표)",
    keyResult: "KeyResult(기대 결과)",
    chapter: "Chapter",
    group: "Group",
    achievement: "달성률",
  };
  const initiativeHeader = {
    year: "년도",
    quarter: "분기",
    object: "Object(목표)",
    keyResult: "KeyResult(기대 결과)",
    initiative: "Initiative(업무)",
    chapter: "Chapter",
    group: "Group",
    name: "담당자",
    achievement: "달성률",
  };

  return (
    <main className=" w-full max-w-full py-5 mx-auto xl:max-w-[1280px]">
      <OKRTable title="Object(목표)" sorted={title} headDatas={objectHeader} />
      <OKRTable
        title="KeyResult(기대 결과)"
        sorted={title}
        headDatas={keyResultHeader}
        className="my-10"
      />
      <OKRTable
        title="Initiative(업무)"
        sorted={title}
        headDatas={initiativeHeader}
        className="my-10"
      />
    </main>
  );
};

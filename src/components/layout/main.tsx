import { OKRTable } from "../elements/OKRTable";
import React from "react";

interface MainProps {
  title: string;
}
export const Main = ({ title }: MainProps) => {
  const objectHeader = {
    year: "년도",
    quarter: "분기",
    object: "목표(Object)",
    chapter: "챕터",
    group: "부서",
    achievement: "달성률",
  };
  const keyResultHeader = {
    year: "년도",
    quarter: "분기",
    object: "목표(Object)",
    keyResult: "기대 결과(KeyResult)",
    chapter: "챕터",
    group: "부서",
    achievement: "달성률",
  };
  const initiativeHeader = {
    year: "년도",
    quarter: "분기",
    object: "목표(Object)",
    keyResult: "기대 결과(KeyResult)",
    initiative: "업무(Initiative)",
    chapter: "챕터",
    group: "부서",
    name: "담당자",
    achievement: "달성률",
  };

  return (
    <main className=" w-full max-w-full py-5 mx-auto xl:max-w-[1280px]">
      <OKRTable title="Object(목표)" sorted={title} headDatas={objectHeader} />
      <OKRTable
        title="Key Result(기대 결과)"
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

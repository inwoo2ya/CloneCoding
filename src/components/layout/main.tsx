import { OKRTable } from "../elements/OKRTable";
import React, { useState } from "react";

import { InputOKR } from "../elements/form/InputOKR";

interface MainProps {
  title: string;
}
export const Main = ({ title }: MainProps) => {
  const [createTitle, setCreateTitle] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
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
  const bodyDatas = [
    {
      year: "2022",
      quarter: "3분기",
      object: "경험해보지 못한 근무환경 구축",
      chapter: "총무",
      keyResult: "업무 능률을 높일 수 있는 시스템을 도입한다.",
      name: "총길동",
      group: "자산운영팀",
      initiative: "최신의 다양한 업무 물품을 지원한다.",
      achievement: 10,
    },
    {
      year: "2022",
      quarter: "3분기",
      object: "디지털 범죄 대응 업계 1등",
      chapter: "마케팅",
      keyResult: "디지털 범죄 대응 기업 신 사업 기획 2건",
      name: "마길동",
      group: "마케팅기획추진팀",
      initiative: "첨단화된 시스템을 홍보한다.",
      achievement: 15,
    },
    {
      year: "2023",
      quarter: "1분기",
      object: "경험해보지 못한 근무환경 구축",
      chapter: "총무",
      keyResult: "조직의 안정화를 위한 기본 업무 환경 구성을 완성한다.",
      initiative: "업무시스템을 빠르게 완성한다.",
      group: "자산운영팀",
      name: "총총길동",
      achievement: 20,
    },
    {
      year: "2023",
      quarter: "1분기",
      object: "경험해보지 못한 근무환경 구축",
      chapter: "총무",
      keyResult: "국내 최고의 근무환경을 구성한다.",
      initiative: "최신의 다양한 업무 물품을 지원한다.",
      group: "자산운영팀",
      name: "총총총길동",
      achievement: 13,
    },
  ];

  return (
    <main className=" w-full h-full maxwidth40 py-5 mx-auto xl:max-w-[1280px]">
      <InputOKR
        sorted={title}
        title={createTitle}
        visible={visible}
        setVisible={setVisible}
        headDatas1={initiativeHeader}
        headDatas2={keyResultHeader}
        headDatas3={objectHeader}
      />

      <OKRTable
        title="Object(목표)"
        sorted={title}
        headDatas={objectHeader}
        bodyDatas={bodyDatas}
        onCreate={setCreateTitle}
        onClick={setVisible}
      />
      <OKRTable
        title="KeyResult(기대 결과)"
        sorted={title}
        headDatas={keyResultHeader}
        className="my-10"
        bodyDatas={bodyDatas}
        onCreate={setCreateTitle}
        onClick={setVisible}
      />
      <OKRTable
        title="Initiative(업무)"
        sorted={title}
        headDatas={initiativeHeader}
        bodyDatas={bodyDatas}
        className="my-10"
        onCreate={setCreateTitle}
        onClick={setVisible}
      />
    </main>
  );
};

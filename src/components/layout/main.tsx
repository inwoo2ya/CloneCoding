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

  return (
    <main className=" w-full h-full maxwidth40 py-5 mx-auto xl:max-w-[1280px]">
      <InputOKR
        sorted={title}
        title={createTitle}
        visible={visible}
        setVisible={setVisible}
        headDatas={initiativeHeader}
      />

      <OKRTable
        title="Object(목표)"
        sorted={title}
        headDatas={objectHeader}
        onCreate={setCreateTitle}
        onClick={setVisible}
      />
      <OKRTable
        title="KeyResult(기대 결과)"
        sorted={title}
        headDatas={keyResultHeader}
        className="my-10"
        onCreate={setCreateTitle}
        onClick={setVisible}
      />
      <OKRTable
        title="Initiative(업무)"
        sorted={title}
        headDatas={initiativeHeader}
        className="my-10"
        onCreate={setCreateTitle}
        onClick={setVisible}
      />
    </main>
  );
};

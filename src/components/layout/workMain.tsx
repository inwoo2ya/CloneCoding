import { OKRTable } from "../elements/OKRTable";
import React, { useState } from "react";
import { InputOKR } from "../elements/form/InputOKR";

export const WorkMain = () => {
  const initiativeHeader = {
    priority: "우선순위",
    keyResult: "KeyResult(기대 결과)",
    initiative: "Initiative(업무)",
    chapter: "Chapter",
    group: "Group",
    achievement: "달성률(%)",
    check: "업무 상태",
  };
  const initiativeBody = [
    {
      priority: 1,
      keyResult: "개쩌는 웹사이트 제작",
      initiative: "React프레임워크를 사용하여 컴포넌트 제작 1건",
      chapter: "R&D",
      group: "웹개발팀",
      achievement: 50,
      check: "진행중",
    },
  ];
  const [visible, setVisible] = useState<boolean>(false);
  const [createTitle, setCreateTitle] = useState<string>("");
  const [currentClick, setCurrentClick] = useState<number>(undefined);

  return (
    <main className="py-[100px] ">
      <h1 className="text-4xl pb-5 border-b-[1px]">업무 관리</h1>
      <InputOKR
        sorted="Group"
        title="Initiative(업무)"
        visible={visible}
        setVisible={setVisible}
        setCurrent={setCurrentClick}
        data={initiativeBody}
        current={currentClick}
        headDatas1={initiativeHeader}
        className="font-normal"
      />
      <OKRTable
        headDatas={initiativeHeader}
        sorted="Group"
        title="Initiative(업무)"
        bodyDatas={initiativeBody}
        setCurrent={setCurrentClick}
        onCreate={setCreateTitle}
        onClick={setVisible}
        className="font-normal"
      />
      <p>
        - 하나의 Initiative는 Key Result 및 프로젝트에 관계 설정
        <br />- 업무 우선순위 설정 및 출력 기능
        <br /> - 업무별 진행사항 업데이트 기능 = 업무 일지 및 진행률 업데이트
        한번에 가능 <br /> - 업무 요청 기능 <br />- 이니셔티브 달성을 체크하는
        곳을 만들어놓고, okr 분기 끝날때쯤에 체크안된 이니셔티브는 알림을 한번
        주는 기능
        <br />- 업무 현황(총 업무 수, 진행대기 / 진행 중 / 완료 / 보류 등 각
        상태별 업무 수 통계 등)
      </p>
    </main>
  );
};

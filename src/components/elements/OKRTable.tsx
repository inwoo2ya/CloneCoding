import React from "react";
import classNames from "classnames";
import { Search } from "./Search";

interface OKRProps {
  title: string;
  sorted: string;
  className?: string;
  headDatas: { [key: string]: string };
  bodyDatas?: {
    [key: string]: string | { [key: string]: string | JSX.Element | boolean }[];
  };
}

export const OKRTable = ({
  title,
  className,
  headDatas,
  sorted,
  bodyDatas,
}: OKRProps) => {
  sorted.toLowerCase();
  const testHeadData: { [key: string]: string } = {
    year: "년도",
    quarter: "분기",
    object: "목표",
    chapter: "Chapter",
    achievement: "달성률",
  };
  const testBodyData = [
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
  ];
  // const testData: { [key: string]: string | number } = [
  // {
  //   년도: "2022",
  //   분기: "3분기",
  //   목표: "경험해보지 못한 근무환경 구축",
  //   Chapter: "총무",
  //   달성률: 10,
  // },
  // {
  //   년도: "2022",
  //   분기: "3분기",
  //   목표: "디지털 범죄 대응 업계 1등",
  //   Chapter: "마케팅",
  //   달성률: 15,
  // },
  // ];
  return (
    <section className={classNames(className)}>
      <ul className="mb-3 border-b-[1px]">
        <div className="w-full flex justify-between">
          <li className="p-1 cursor-pointer border-b-[2px] border-b-black">
            <p className="p-1 rounded-md hover:bg-gray-200">{title} 설정</p>
          </li>
          <li className="p-3">
            <Search className="text-sm" />
          </li>
        </div>
      </ul>
      <h1 className="overflow-hidden whitespace-nowrap font-bold text-xl my-2">
        {title}
      </h1>
      <table className="w-full whitespace-nowrap">
        <thead className="border-b-[1px] text-left text-sm">
          <tr className=" text-[#37352fa6]">
            {Object.keys(headDatas).map((v: string, k: number) => (
              <th
                className={classNames("py-2", {
                  hidden:
                    sorted.toLowerCase() === "chapter" &&
                    (v === "group" || v === "name"),
                })}
                key={k}
              >
                {headDatas[v]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {testBodyData.map((body, i) => (
            <tr
              key={i}
              className={classNames({
                "w-full min-w-full align-baseline text-sm  ":
                  Object.values(body).length > 0,
              })}
            >
              {Object.keys(headDatas).map((bodyKey, index) => (
                <td
                  key={index}
                  className={classNames("h-full border-b-[1px] px-2", {
                    "text-right": index === 0,
                    "border-r-[1px]":
                      index < Object.values(headDatas).length - 1,
                    hidden:
                      sorted.toLowerCase() === "chapter" &&
                      (bodyKey === "group" || bodyKey === "name"),
                    "hover:bg-gray-200 hover:cursor-pointer":
                      title === headDatas[bodyKey],
                  })}
                >
                  {body[bodyKey as keyof typeof body] as string}
                  {bodyKey === "achievement" ? <>%</> : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

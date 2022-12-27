import React, { Dispatch, SetStateAction } from "react";
import classNames from "classnames";
import { Search } from "./Search";
import { useRecoilState } from "recoil";
import { searchState } from "../../store/search";

interface OKRProps {
  title?: string;
  sorted: string;
  className?: string;
  headDatas: { [key: string]: string };
  bodyDatas?: { [key: string]: string | number }[] | undefined;
  setCurrent?: Dispatch<SetStateAction<number>>;
  onCreate: Dispatch<SetStateAction<string>>;
  onClick: Dispatch<SetStateAction<boolean>>;
}

export const OKRTable = ({
  title,
  className,
  headDatas,
  sorted,
  bodyDatas,
  onCreate,
  onClick,
  setCurrent,
}: OKRProps) => {
  sorted.toLowerCase();
  const [searchData, setSearchData] = useRecoilState<string>(searchState);

  const filtered = (bodyDatas || []).filter((value) => {
    if (searchData === "") {
      return value;
    } else if (sorted.toLowerCase() === "chapter") {
      if (
        value.object
          .toString()
          .toUpperCase()
          .includes(searchData.toUpperCase()) ||
        value.chapter
          .toString()
          .toUpperCase()
          .includes(searchData.toUpperCase()) ||
        value.initiative
          ?.toString()
          .toUpperCase()
          .includes(searchData.toUpperCase()) ||
        value.keyResult
          ?.toString()
          .toUpperCase()
          .includes(searchData.toUpperCase()) ||
        value.quarter
          .toString()
          .toUpperCase()
          .includes(searchData.toUpperCase()) ||
        value.year.toString().toUpperCase().includes(searchData.toUpperCase())
      ) {
        return value;
      }
    } else if (sorted.toLowerCase() === "group") {
      if (
        value.object
          .toString()
          .toUpperCase()
          .includes(searchData.toUpperCase()) ||
        value.chapter
          .toString()
          .toUpperCase()
          .includes(searchData.toUpperCase()) ||
        value.group?.toString().includes(searchData.toUpperCase()) ||
        value.initiative
          ?.toString()
          .toUpperCase()
          .includes(searchData.toUpperCase()) ||
        value.keyResult
          ?.toString()
          .toUpperCase()
          .includes(searchData.toUpperCase()) ||
        value.name
          ?.toString()
          .toUpperCase()
          .includes(searchData.toUpperCase()) ||
        value.quarter
          .toString()
          .toUpperCase()
          .includes(searchData.toUpperCase()) ||
        value.year.toString().toUpperCase().includes(searchData.toUpperCase())
      ) {
        return value;
      }
    }
  });
  return (
    <section className={classNames(className)}>
      <ul className="mb-3 border-b-[1px] sticky">
        <div className="w-full flex justify-between">
          <li className="p-1 cursor-pointer border-b-[2px] border-b-black">
            <p className="p-1 rounded-md hover:bg-gray-200 w-fit">
              {title} 설정
            </p>
          </li>
          <li className="p-3 flex text-sm items-center">
            <Search
              className={classNames({ hidden: title !== "Object(목표)" })}
            />
            <button
              className="z-10 outline-none text-white px-3 py-[2px] bg-zinc-700 hover:bg-gray-500 tracking-tight rounded-lg"
              name={title}
              onClick={(e) => {
                const result = (e.target as HTMLInputElement).name;
                onCreate(result);
                onClick(true);
              }}
            >
              새로 만들기
            </button>
          </li>
        </div>
      </ul>
      <h1 className="overflow-hidden whitespace-nowrap font-bold text-xl my-2">
        {title}
      </h1>
      <div className="relative">
        <div className=" overflow-x-auto overflow-y-hidden pb-5" id="table">
          <table className="w-full whitespace-nowrap ">
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
              {filtered.map((body, i) => (
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
                      onClick={() => {
                        if (title === headDatas[bodyKey]) {
                          onCreate(headDatas[bodyKey]);
                          setCurrent(i);
                          onClick(true);
                        }
                      }}
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
        </div>
      </div>
    </section>
  );
};

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import classNames from "classnames";

interface InputOKRprops {
  sorted: string;
  title?: string;
  className?: string;
  setVisible: Dispatch<SetStateAction<boolean>>;
  setCurrent?: Dispatch<SetStateAction<number>>;
  visible: boolean;
  current?: number;
  data?: { [key: string]: string | number }[];
  headDatas1: { [key: string]: string };
  headDatas2?: { [key: string]: string };
  headDatas3?: { [key: string]: string };
}
export const InputOKR = ({
  className,
  data,
  current,
  setCurrent,
  sorted,
  title,
  visible,
  headDatas1,
  headDatas2,
  headDatas3,
  setVisible,
}: InputOKRprops) => {
  const [headDatas, setHeadDatas] = useState(headDatas1);
  const [prevTitle, setprevTitle] = useState<string>(title);
  const [input, setinput] = useState<string>("");
  const [currentData, setCurrentData] = useState<{
    [key: string]: string | number;
  }>({
    year: "",
    quarter: "",
    object: "",
    chapter: "",
    keyresult: "",
    initiative: "",
    group: "",
    name: "",
    achievement: undefined,
  });
  const titleKey = title.toLowerCase().split("(")[0];
  useEffect(() => {
    if (title === "Object(목표)") {
      setHeadDatas(headDatas3);
    } else if (title === "KeyResult(기대 결과)") {
      setHeadDatas(headDatas2);
    } else {
      setHeadDatas(headDatas1);
    }
  }, [title]);
  useEffect(() => {
    if (current !== undefined) {
      setCurrentData(data[current]);
    }
  }, [current]);

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentData({ ...currentData, [name]: value });
    console.log(value);
    //OKR 저장 함수 작성
  };
  console.log(currentData);
  return (
    <section
      className={classNames(
        "fixed top-0 right-0 bg-white z-[15] px-10 shadow-lg xl:w-1/2 w-full h-full trasition-all duration-[500ms] ",
        className,
        { "translate-x-0": visible, " translate-x-[100%]": !visible }
      )}
    >
      <button
        className="left-3 absolute px-2 mt-2  hover:bg-zinc-400 rounded-xl"
        onClick={() => {
          setVisible(false);
          setCurrent(undefined);
          setCurrentData({});
        }}
      >
        X
      </button>
      <div className="mt-10">
        {/* {title} */}
        <input
          type="text"
          name={titleKey}
          placeholder={title}
          onChange={(e) => inputValue(e)}
          value={currentData[titleKey] || ""}
          className="text-[28px] font-semibold outline-none placeholder:text-[#37352f26] w-full"
        />
      </div>
      {Object.keys(headDatas).map((key, index) => {
        if (
          headDatas[key] === "KeyResult(기대 결과)" ||
          headDatas[key] === "Object(목표)" ||
          headDatas[key] === "InputInitiative(업무)"
        ) {
          headDatas[key] = headDatas[key].split("(")[0];
        }
        return (
          <div
            key={index}
            className={classNames("flex my-2", {
              hidden:
                (sorted.toLowerCase() === "chapter" &&
                  (headDatas[key] === "Group" ||
                    headDatas[key] === "담당자")) ||
                headDatas[key] === title,
            })}
          >
            <div className="cursor-pointer items-center rounded-md xl:w-[160px] py-1 pl-2 text-[#37352fa6] hover:bg-gray-200">
              {headDatas[key]}
            </div>

            <input
              type="text"
              name={key}
              value={currentData[key] || ""}
              className="outline-none rounded-md hover:bg-gray-200 focus:bg-gray-200 w-full"
              onChange={(e) => {
                inputValue(e);
              }}
            />
          </div>
        );
      })}
    </section>
  );
};

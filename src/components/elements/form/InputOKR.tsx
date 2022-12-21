import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import classNames from "classnames";

interface InputOKRprops {
  sorted: string;
  title?: string;
  className?: string;
  setVisible: Dispatch<SetStateAction<boolean>>;
  visible: boolean;
  headDatas1: { [key: string]: string };
  headDatas2: { [key: string]: string };
  headDatas3: { [key: string]: string };
}
export const InputOKR = ({
  className,
  sorted,
  title,
  visible,
  headDatas1,
  headDatas2,
  headDatas3,
  setVisible,
}: InputOKRprops) => {
  const [headDatas, setHeadDatas] = useState(headDatas1);
  useEffect(() => {
    if (title === "Object(목표)") {
      setHeadDatas(headDatas3);
    } else if (title === "KeyResult(기대 결과)") {
      setHeadDatas(headDatas2);
    } else {
      setHeadDatas(headDatas1);
    }
  }, [title]);
  return (
    <section
      className={classNames(
        "fixed top-0 right-0 bg-white z-[15] px-10 shadow-lg xl:w-1/2 w-full h-full trasition-all duration-[500ms] ",
        { "translate-x-0": visible, " translate-x-[100%]": !visible }
      )}
    >
      <button
        className="left-3 absolute px-2 mt-2  hover:bg-zinc-400 rounded-xl"
        onClick={() => setVisible(false)}
      >
        X
      </button>
      <div className="mt-10">
        {/* {title} */}
        <input
          type="text"
          placeholder={title}
          className="text-[28px] font-semibold outline-none placeholder:text-[#37352f26] w-full"
        />
      </div>
      {Object.values(headDatas).map((value, index) => {
        if (value !== title) {
          value = value.split("(")[0];
        }
        return (
          <div
            key={index}
            className={classNames("flex my-2", {
              hidden:
                (sorted.toLowerCase() === "chapter" &&
                  (value === "Group" || value === "담당자")) ||
                value === title,
            })}
          >
            <div className="cursor-pointer items-center rounded-md xl:w-[160px] py-1 pl-2 text-[#37352fa6] hover:bg-gray-200">
              {value}
            </div>

            <input
              type="text"
              className="outline-none rounded-md hover:bg-gray-200 focus:bg-gray-200 w-full"
            />
          </div>
        );
      })}
    </section>
  );
};

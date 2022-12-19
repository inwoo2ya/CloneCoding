import React, { Dispatch, SetStateAction } from "react";
import classNames from "classnames";

interface InputOKRprops {
  sorted: string;
  title: string;
  className?: string;
  setVisible: Dispatch<SetStateAction<boolean>>;
  visible: boolean;
  headDatas: { [key: string]: string };
}
export const InputOKR = ({
  className,
  sorted,
  title,
  visible,
  headDatas,
  setVisible,
}: InputOKRprops) => {
  return (
    <section
      className={classNames(
        "fixed top-0 right-0 bg-white z-[15] p-5 shadow-lg w-1/2 h-full trasition-all duration-[500ms]",
        { "translate-x-0": visible, " translate-x-[100%]": !visible }
      )}
    >
      <h1>{title}</h1>
      {Object.values(headDatas).map((value, index) => (
        <div key={index}>{value}</div>
      ))}
      <button
        className="p-1 hover:bg-zinc-400 rounded-xl"
        onClick={() => setVisible(false)}
      >
        취소
      </button>
    </section>
  );
};

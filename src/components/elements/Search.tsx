import React, { useState } from "react";
import classNames from "classnames";
import SearchIcon from "../assets/icon-search.svg";

interface Searchprops {
  className?: string;
}
export const Search = ({ className }: Searchprops) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={classNames("flex", className)}>
      <div
        className={classNames(
          "cursor-pointer trasition-all duration-[500ms] ",
          {
            "-translate-x-1": visible,
            "translate-x-40": !visible,
          }
        )}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        검색
      </div>

      <input
        type="text"
        placeholder="검색하세요."
        className={classNames(
          "px-1 w-fit outline-none trasition-all duration-[500ms] border-b-[1px]",
          {
            "opacity-1 -translate-x-0": visible,
            "opacity-0 translate-x-40": !visible,
          }
        )}
      />
    </div>
  );
};

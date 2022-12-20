import React, { useState } from "react";
import classNames from "classnames";
import { useRecoilState } from "recoil";
import { searchState } from "../../store/search";
import { ReactComponent as SearchIcon } from "../assets/searchIcon.svg";

interface Searchprops {
  className?: string;
}
export const Search = ({ className }: Searchprops) => {
  const [searchData, setSearchData] = useRecoilState<string>(searchState);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const inputSearchValue = (e: any) => {
    setValue(e.target.value);
    setSearchData(e.target.value);
    console.log(value);
  };
  return (
    <div className={classNames("flex", className)}>
      <div
        className={classNames(
          "cursor-pointer  trasition-all duration-[500ms] hover:bg-gray-200 rounded-lg px-2 py-[2px] text-white",
          {
            "translate-x-10": visible,
            "translate-x-40": !visible,
          }
        )}
        onClick={(e) => {
          setVisible(!visible);
          if (visible) {
            setValue("");
            setSearchData("");
          }
        }}
      >
        <SearchIcon />
      </div>

      <input
        type="text"
        value={value}
        placeholder="검색하세요."
        className={classNames(
          "px-1 w-2/3 outline-none trasition-all duration-[500ms] border-b-[1px]",
          {
            "opacity-1 translate-x-10": visible,
            "opacity-0 translate-x-40": !visible,
          }
        )}
        onChange={(e) => inputSearchValue(e)}
      />
    </div>
  );
};

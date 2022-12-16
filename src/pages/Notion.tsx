import React, { useState } from "react";
import classNames from "classnames";
import { Header } from "../components/layout/header";
import { Main } from "../components/layout/main";

export const Notion = () => {
  const OKR = [
    ["Chapter", "챕터OKR"],
    ["Group", "그룹OKR"],
  ];
  const [title, setTitle] = useState("Chapter");
  return (
    <>
      {OKR.map((v, k) => (
        <button
          key={k}
          className={classNames("m-2 p-2 rounded-lg ", {
            "bg-red-500": title === v[0],
          })}
          onClick={() => {
            setTitle(v[0]);
          }}
        >
          {v[1]}
        </button>
      ))}
      <Header title={title} />
      <Main title={title} />
    </>
  );
};

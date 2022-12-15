import React, { useState } from "react";
import classNames from "classnames";
import { Header } from "./components/layout/header";
import { Main } from "./components/layout/main";
import { Footer } from "./components/layout/footer";

function App() {
  const [title, setTitle] = useState("Chapter");
  return (
    <div className="App">
      <button
        className={classNames("m-2 p-2 rounded-lg ", {
          "bg-red-500": title === "Chapter",
        })}
        onClick={() => {
          setTitle("Chapter");
        }}
      >
        챕터OKR
      </button>
      <button
        className={classNames("mx-2 p-2 rounded-lg ", {
          "bg-red-500": title === "Group",
        })}
        onClick={() => {
          setTitle("Group");
        }}
      >
        그룹OKR
      </button>
      <Header title={title} />
      <Main title={title} />
      <Footer />
    </div>
  );
}

export default App;

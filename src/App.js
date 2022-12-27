import React, { useState } from "react";
import classNames from "classnames";
import { Footer } from "./components/layout/footer";
import { Notion } from "./pages/Notion";
import { CooperationTool } from "./pages/WorkManagement";
import { RecoilRoot } from "recoil";

function App() {
  const [form, setForm] = useState(false);

  return (
    <RecoilRoot>
      <div className="App">
        <button
          className={classNames("m-5 p-5 rounded-lg font-bold", {
            "bg-gray-200": form === false,
            "bg-yellow-300": form === true,
          })}
          onClick={() => {
            setForm(!form);
          }}
        >
          Notion/업무관리
        </button>
        {form ? <CooperationTool /> : <Notion />}
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default App;

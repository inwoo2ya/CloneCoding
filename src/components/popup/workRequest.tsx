import React, { Dispatch, SetStateAction } from "react";
import classNames from "classnames";

interface WorkRequestProps {
  className: string;
  onClick: () => void;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export const WorkRequest = ({
  onClose,
  onClick,
  className,
}: WorkRequestProps) => {
  return (
    <section>
      <div>
        버튼 클릭시 업무요청 팝업창이 뜸<br /> 메일,채팅 전송
      </div>
      <button onClick={onClick}> 확인 </button>
      <button
        onClick={(e) => {
          onClose(false);
        }}
      >
        취소
      </button>
    </section>
  );
};

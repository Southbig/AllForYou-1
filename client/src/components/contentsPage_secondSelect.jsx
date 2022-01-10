import React from "react";
import style from "./contentsPage_secondSelect.module.css";

const ContentsPage_secondSelect = ({
  select_2_contents,
  handleContentsInfo,
}) => {
  return (
    <div className={style.container}>
      {select_2_contents.map((el) => (
        <div className={style.contents_container}>
          <img
            className={style.img_card}
            src={el.image}
            alt=""
            onClick={() => handleContentsInfo(el)}
          />
          <span className={style.title}>{el.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ContentsPage_secondSelect;
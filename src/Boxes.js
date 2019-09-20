import React from "react";

const Boxes = ({ Arr, windowInformation }) => {
  let column = Arr.length ? Arr.length : 0;
  column =
    column > windowInformation.defaultColumn
      ? column
      : windowInformation.defaultColumn;
  let boxes = [];
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < 24; j++) {
      boxes.push(
        <div
          className={i % 2 === 1 ? "blockwhite" : "blockgray"}
          style={{
            width: windowInformation.unitWidth,
            height: windowInformation.unitHeight
          }}
        ></div>
      );
    }
  }

  const wrap = (
    <div className="table">
      <div
        className="title"
        style={{ width: column * windowInformation.unitWidth }}
      >
        日程内容
      </div>
      <div
        className="flexbox"
        style={{ width: column * windowInformation.unitWidth }}
      >
        {boxes}
      </div>
    </div>
  );

  return wrap;
};

export default Boxes;

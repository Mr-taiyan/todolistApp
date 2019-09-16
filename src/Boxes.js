import React from "react";

const Boxes = ({ Arr }) => {
  let column = Arr.length ? Arr.length : 0;
  column = column > 4 ? column : 4;
  let boxes = [];
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < 24; j++) {
      boxes.push(
        <div className={i % 2 === 1 ? "blockwhite" : "blockgray"}></div>
      );
    }
  }

  const wrap = (
    <div className="flexbox" style={{ width: column * 144 }}>
      {boxes}
    </div>
  );

  return wrap;
};

export default Boxes;

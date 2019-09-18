import React from "react";

const Blocks = ({ finalArr }) => {
  return (
    <div className="wrapper" style={{ width: "0px" }}>
      {!finalArr.length
        ? []
        : finalArr.map(({ start, end, content, column, backgroundColor }) => (
            <div
              key={`${column}-${start}`}
              style={{
                gridColumn: `${column}/${column + 1}`,
                gridRow: `${start + 1}/${end + 1}`,
                backgroundColor: backgroundColor
              }}
            >
              {start}~{end}:{content}
            </div>
          ))}
    </div>
  );
};

export default Blocks;

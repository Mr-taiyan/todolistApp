import React, { useState, useEffect } from "react";

const Selection = ({ handler, hours }) => {
  const [content, setContent] = useState("");
  const [starts, setStarts] = useState(hours);
  const [start, setStart] = useState(new Date().getHours());
  const [ends, setEnds] = useState([]);
  const [end, setEnd] = useState("");

  useEffect(() => {
    setEnd(start + 1);
    let today = new Date();
    let currentHours = hours.slice(today.getHours());
    let nextHours = hours.slice(start + 1);

    setStarts(currentHours);
    setEnds(nextHours);
  }, [start, setEnd, setStarts]);
  //   });

  return (
    <form
      className="body-left"
      onSubmit={e => {
        e.preventDefault();
        handler({ start, end, content });
      }}
    >
      <div className="body-select">
        <label className="title-select">事件</label>
        <select
          id="starttime-select"
          value={start}
          onChange={e => setStart(+e.target.value)}
          onBlur={e => setStart(+e.target.value)}
        >
          {starts.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          id="endtime-select"
          value={end}
          onChange={e => setEnd(+e.target.value)}
          onBlur={e => setEnd(+e.target.value)}
        >
          {ends.length === 0 ? (
            <option>--</option>
          ) : (
            ends.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))
          )}
        </select>
        <input
          id="message"
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>
      <button className="submit">✅</button>
    </form>
  );
};

export default Selection;

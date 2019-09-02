import React, { useState, useEffect } from "react";

const Selection = ({ handler }) => {
  let hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push(i);
  }
  const [content, setContent] = useState("");
  const [starts, setStarts] = useState(hours);
  const [start, setStart] = useState(new Date().getHours());
  const [ends, setEnds] = useState([]);
  const [end, setEnd] = useState("");

  useEffect(() => {
    setEnd("");
    let today = new Date();
    let currentHours = hours.slice(today.getHours());
    let nextHours = hours.slice(start + 1);

    setStarts(currentHours);
    setEnds(nextHours);
  }, [start, setEnd, setStarts]);
  //   });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handler({ start, end, content });
      }}
    >
      <label>
        content:
        <input
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </label>
      <label>
        start:
        <select value={start} onChange={e => setStart(+e.target.value)}>
          {starts.map(item => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </label>
      <label>
        end:
        <select value={end} onChange={e => setEnd(e.target.value)}>
          {ends.length === 0 ? (
            <option>--</option>
          ) : (
            ends.map(item => <option value={item}>{item}</option>)
          )}
        </select>
      </label>
      <button>✅</button>
    </form>
  );
};

export default Selection;

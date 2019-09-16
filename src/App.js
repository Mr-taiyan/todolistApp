import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Selection from "./Selection";
import { Router, Link } from "@reach/router";
import getRandomColor from "./getRandomColor";
import Boxes from "./Boxes";

// const App = () => {
//   const [plans, setPlans] = useState([]);

//   return (
//     <div>
//       <Selection handler={setPlans} />
//       <img src={require("../img/time-scale.png")} alt="not found" />
//       {/* <img src="../img/time-scale.png" alt="not found" /> */}
//     </div>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [],
      optArr: []
    };
    this.handler = this.handler.bind(this);
  }

  handler(obj) {
    // this.setState((state, props) => ({
    //   plans: state.plans.push(obj)
    // }));
    // console.log(this.state.plans);
    let newArr = this.state.plans;
    newArr.push(obj);

    let optArr = [];
    for (let item of newArr) {
      let index = 0;
      mark: while (true) {
        if (!optArr[index]) {
          optArr[index] = [];
          optArr[index].push(item);
          break;
        }

        for (let { start, end } of optArr[index]) {
          if (
            (item.start <= start && item.end > start) ||
            (item.end >= end && item.start < end) ||
            (item.start >= start && item.end <= end)
          ) {
            index++;
            continue mark;
          }
        }

        optArr[index].push(item);
        break;
      }
    }

    // let a = document.getElementsByClassName("wrapper")[0];
    // a.style.width = `${optArr.length * 200}px`;
    // console.log(a.style);

    let finalArr = [];
    for (let i = 0, len = optArr.length; i < len; i++) {
      for (let item of optArr[i]) {
        item.column = i + 1;
        item.backgroundColor = getRandomColor();
        finalArr.push(item);
      }
    }

    this.setState({
      plans: newArr,
      optArr: finalArr
    });
  }

  render() {
    return (
      <div>
        <Selection handler={this.handler} />
        <div className="set">
          <div>
            <img src={require("../img/time-scale.png")} alt="not found" />
          </div>
          {/* <div className="wrapper" style={{ width: "0px" }}>
            {!this.state.optArr
              ? []
              : this.state.optArr.map(
                  ({ start, end, content, column, backgroundColor }) => (
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
                  )
                )}
          </div> */}
        </div>
        <Boxes Arr={this.state.optArr} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));

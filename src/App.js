import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Selection from "./Selection";
import { Router, Link } from "@reach/router";
import getRandomColor from "./getRandomColor";
import Boxes from "./Boxes";
import Blocks from "./Blocks";
import TimeBar from "./TimeBar";

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

    this.hours = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      0
    ];
    let currentWindowWidth = window.innerWidth;
    let windowInformation = {};
    windowInformation.unitWidth = 144;
    windowInformation.unitHeight = 26;
    windowInformation.defaultColumn = 4;
    if (currentWindowWidth <= 375) {
      windowInformation["unitWidth"] = 100;
      windowInformation["unitHeight"] = 26;
      windowInformation["defaultColumn"] = 3;
    }
    this.state = {
      plans: [],
      optArr: [],
      finalArr: [],
      windowInformation: windowInformation
    };
    this.handler = this.handler.bind(this);
  }

  handler(obj) {
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

    let a = document.getElementsByClassName("wrapper")[0];
    console.log(this.state.windowInformation.unitWidth);
    a.style.width = `${optArr.length *
      this.state.windowInformation.unitWidth}px`;

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
      optArr: optArr,
      finalArr: finalArr
    });
  }

  render() {
    return (
      <div>
        <div className="set">
          <Selection handler={this.handler} hours={this.hours} />
          <div className="boxing">
            <TimeBar hours={this.hours} />
            <div className="binder">
              <Boxes
                Arr={this.state.optArr}
                windowInformation={this.state.windowInformation}
              />
              <Blocks finalArr={this.state.finalArr} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));

import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Selection from "./Selection";
import { Router, Link } from "@reach/router";

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
      plans: []
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
    this.setState({
      plans: newArr
    });
  }

  render() {
    return (
      <div>
        {console.log(this.state.plans)}
        <Selection handler={this.handler} />
        <img src={require("../img/time-scale.png")} alt="not found" />
        {/* <img src="../img/time-scale.png" alt="not found" /> */}
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));

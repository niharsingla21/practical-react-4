import { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div className="App">
        <div className={this.state.visible ? "visible" : "hidden"}>
          <Counter initialCount={0} />
        </div>

        {/* <div style={this.state.visible ? {} : { display: "none" }}>
          <Counter initialCount={0} />
        </div> */}
        <button
          onClick={() =>
            this.setState({
              visible: !this.state.visible,
            })
          }
        >
          Toggle Counter
        </button>
      </div>
    );
  }
}

export default App;

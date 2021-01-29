import Navigation from "./components/Navigation";
import Bar from "./components/Bar";
import Content from "./components/Content";
// import Profile from "./components/Profile";
// import { Profiler } from "react";

function App() {
  return (
    <div className="app">
      <Bar />
      <Navigation />
      <div className="contents">
        <Content />

        {/* <Profile /> */}
      </div>
    </div>
  );
}

export default App;

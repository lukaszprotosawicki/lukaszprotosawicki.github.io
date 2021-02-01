import Navigation from "./components/Navigation";
import Bar from "./components/Bar";
import Content from "./components/Content";
import Hamburger from "./components/Hamburger";

function App() {
  return (
    <div className="app">
      <Hamburger />
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

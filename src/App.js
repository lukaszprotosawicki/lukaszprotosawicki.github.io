import Bar from "./components/Bar";
import Content from "./components/Content";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div className="app">
      <div></div>
      <Bar />
      <Navbar />
      <div className="contents">
        <Content />
      </div>
    </div>
  );
}

export default App;

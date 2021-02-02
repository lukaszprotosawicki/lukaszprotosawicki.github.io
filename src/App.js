// import Navigation from "./components/Navigation";
import Bar from "./components/Bar";
import Content from "./components/Content";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div className="app">
      <h1>App</h1>
      <Bar />
      <Navbar />
      <div className="contents">
        <Content />
      </div>
    </div>
  );
}

export default App;

// import Navigation from "./components/Navigation";
import Bar from "./components/Bar";
import Content from "./components/Content";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div className="app">
      {/* <Hamburger /> */}
      <Bar />
      <Navbar />
      <div className="contents">
        <Content />

        {/* <Profile /> */}
      </div>
    </div>
  );
}

export default App;

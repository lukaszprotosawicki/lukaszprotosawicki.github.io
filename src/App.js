import Bar from "./components/Bar";
import Navbar from "./components/nav/Navbar";
import { AuthProvider } from "./components/server/Auth";

function App() {
  return (
    <>
      <AuthProvider>
        <Bar />
        <Navbar />
      </AuthProvider>
    </>
  );
}

export default App;

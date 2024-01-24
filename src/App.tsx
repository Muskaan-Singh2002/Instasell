import Navbar from "./components/Navbar/Navbar";
import Top from "./components/TopSection/Top";
import "./App.css";
import Mid from "./components/MidSection/Mid";
import Down from "./components/DownSection/Down";

function App() {
  return (
    <div>
      <Navbar />
      <hr style={{ marginTop: "-1px" }} />
      <Top />
      <Mid />
      <Down />
    </div>
  );
}

export default App;

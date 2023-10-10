import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full h-screen">
      <div className="bg-black">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default App;

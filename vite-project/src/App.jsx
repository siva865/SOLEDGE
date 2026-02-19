import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./components/About";
import Interest from "./components/Intrest";
import Who from "./Components/Who";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Interest />
      <Who />
      <Footer />
    </div>
  );
}

export default App;

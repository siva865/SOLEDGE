import Navbar from "./Components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Interest from "./components/Intrest";
import Who from "./components/Who";
import Footer from "./components/Footer";

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

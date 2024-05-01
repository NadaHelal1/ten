import "./App.css";
import Feature from "./components/Feature";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import NewSletter from "./components/NewSletter";
import Footer from "./shared/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Feature />
      <About />
      <Pricing />
      <NewSletter />
      <Footer />
    </>
  );
}

export default App;

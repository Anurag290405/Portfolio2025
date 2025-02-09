import Navbar from "./components/Navbar"; // Adjust the import path as needed
import About from "./pages/About";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import SkillandEduction from "./pages/SkillandEduction";
import Projects from "./pages/Projects";
// import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div>
      
      <Navbar />
      <Home/>
      <About/>
      <SkillandEduction/>
      <Experience/>
      {/* <Projects/> */}
      {/* <Testimonial/> */}
      <Contact/>
     
    </div>
  );
}
import Navbar from "./components/Navbar"; // Adjust the import path as needed
import Home from "./pages/Home";
export default function App() {
  return (
    <div>
      {/* Include the Navbar */}
      <Navbar />
      <Home/>
     
    </div>
  );
}
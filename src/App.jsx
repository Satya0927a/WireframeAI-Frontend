import './index.css'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Termofuse from "./pages/Termofuse";
import Privacy from "./pages/Privacy"
import Console from './pages/Console';
import ForgotP from "./pages/ForgotP";
import Pricing from "./components/Pricing";
import Tryit from "./components/Tryit";
import Test from "./pages/Testhome";
import Demo from "./pages/Viewdemo";
import Precision from "./components/Features";

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Signup */}
        <Route path="/Signup" element={<Signup />} />

        {/* Termofuse */}
        <Route path="/term" element={<Termofuse />} />

        {/* Privacy */}
        <Route path="/Privacy" element={<Privacy />} />

        {/* Console  */}
        <Route path="/console" element={<Console />} />

        {/* Forgot Password */}
        <Route path="/forgot-password" element={<ForgotP />} />

        {/* Pricing */}
        <Route path="/pricing" element={<Pricing />} />

        <Route path="/tryit" element={<Tryit />} />

        <Route path="/test" element={<Test />} />

        <Route path="/demo" element={<Demo />} />

        <Route path="/precision" element={<Precision />} />






      </Routes>
    </BrowserRouter>
  );
}
export default App

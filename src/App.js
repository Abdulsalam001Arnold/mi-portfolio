import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Load from "./components/load";
import { Suspense, lazy } from "react";

function App() {
  const Home = lazy(() => import("./Pages/Home"));
  const About = lazy(() => import("./Pages/About"));
  const Projectpage = lazy(() => import("./Pages/Projects"));
  const ContactPage = lazy(() => import("./Pages/Contact"));
  const ServicesPage = lazy(() => import("./Pages/Services"));

  return (
    <div className="bg-[rgb(29,28,34)]">
      <BrowserRouter>
        <Suspense fallback={<Load/>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projectpage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

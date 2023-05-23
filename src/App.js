import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/inicio" /> } />
      <Route exact path="/inicio" element={ <Home /> } />
      <Route exact path="/sobre" element={ <About /> } />
      <Route exact path="/habilidades" element={ <Skills /> } />
      <Route exact path="/projetos" element={ <Projects /> } />
      <Route exact path="/contato" element={ <Contact /> } />
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;

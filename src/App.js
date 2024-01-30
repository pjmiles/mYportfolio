import Navbar from "./components/Navbar";
import About from "./components/About";
import MoreAboutMe from "./components/MoreAboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Seperator from "./components/Seperator";
import "./App.css";

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Seperator />
      <MoreAboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

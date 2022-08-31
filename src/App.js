import { Routes, Route } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Header } from './components/Header';
import About from './components/about/About';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Header />} />
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
      </Routes>
    </div>
  );
}

export default App;

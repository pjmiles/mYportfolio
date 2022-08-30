import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Header } from './components/Header';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/about' element={<About />}/>
      </Routes>
      {/* <Header /> */}
    </div>
  );
}

export default App;

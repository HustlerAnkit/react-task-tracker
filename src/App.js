import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Header title="Task Tracker"/>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/about" element={ <About/> }></Route>
            </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

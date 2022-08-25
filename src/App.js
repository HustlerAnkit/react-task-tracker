import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm( prev => !prev );
  }

  return (
    <div className="container">
      <BrowserRouter>
        <Header title="Task Tracker" toggleForm={ toggleForm }  showForm={showForm}/>
            <Routes>
                <Route path="/" element={ <Home showForm={showForm}/> }></Route>
                <Route path="/about" element={ <About/> }></Route>
            </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

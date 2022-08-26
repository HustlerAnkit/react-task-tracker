import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalContext';

import About from './pages/About';
import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="container">
      <GlobalProvider>
        <BrowserRouter>
          <Header title="Task Tracker" />
              <Routes>
                  <Route path="/" element={ <Home /> }></Route>
                  <Route path="/about" element={ <About/> }></Route>
              </Routes>
          <Footer />
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;

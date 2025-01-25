import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import ReservationMain from './pages/ReservationMain';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<ReservationMain />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

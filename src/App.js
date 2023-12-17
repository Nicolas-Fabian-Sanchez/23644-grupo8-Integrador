import './App.css';
import { Appi } from './components/Appi';
import { DetailMovie } from './components/DetailMovie'
import { Routes, Route } from "react-router-dom";
import { Favorito } from './components/Favorito';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Registrarse } from './components/Registrarse';
import { RecuperoCon } from './components/RecuperoCon';


function App() {
  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <Header />
      <Routes>

      <Route path="/" element={<Appi />} />
        <Route path="/:type" element={<Appi />} />
        <Route path="detailMovie/:idmovie/:type" element={<DetailMovie />} />

        <Route path="favoritos" element={<Favorito />} />
        <Route path='Registrarse' element={<Registrarse />} />
        <Route path='RecuperoCon' element={<RecuperoCon />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

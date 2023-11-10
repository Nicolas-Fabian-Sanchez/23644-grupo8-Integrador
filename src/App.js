import './App.css';
import { Appi } from './components/Appi';
import { DetailMovie } from './components/DetailMovie'
import { Routes, Route } from "react-router-dom";
import {Favorito} from './components/Favorito';
import {Footer} from './components/footer';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Appi />} />
          <Route path="detailMovie/:idmovie" element={<DetailMovie />} />
          <Route path="favoritos" element={<Favorito ids={[536437, 568124]} />}/>
      </Routes>
      <a href='/favoritos' className='btn btn-primary'>Favoritos</a>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import { Appi } from './components/Appi';
import { DetailMovie } from './components/DetailMovie'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Appi />} />
          <Route path="detailMovie/:idmovie" element={<DetailMovie />} />
        </Routes>
    </div>
  );
}

export default App;

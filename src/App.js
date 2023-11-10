import './App.css';
import { Appi } from './components/Appi';
import {Favorito} from './components/Favorito';

function App() {
  return (
    <div className="App">
      <Appi/> 

      <Favorito ids={[1173558, 635910, 875279, 640146]}/>
    </div>
  );
}

export default App;

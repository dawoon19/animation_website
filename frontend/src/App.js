import './styles/App.css';
import Canvas2D from './components/Canvas';
import Startup from './components/Startup';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Startup/>}/>
        <Route path="projects/:id" element={<Canvas2D/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

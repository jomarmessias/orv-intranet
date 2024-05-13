import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '/src/pages/Home';
import Sobre from '/src/pages/Sobre';
import Contato from '/src/pages/Contato';
import Exemplos from '../TestComponent/Exemplos';
import Teste from '../SrChrystian/teste';

function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home />} />    
            <Route path="Sobre" element={ <Sobre/> } />
            <Route path="Contato" element={ <Contato/> } />
            <Route path="Exemplos" element={ <Exemplos/> } />
            <Route path="Teste" element={ <Teste/> } />
          </Routes>        
        </BrowserRouter>
      </div>
  )
}

export default App

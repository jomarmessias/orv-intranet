<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '/src/pages/Home';
import Sobre from '/src/pages/Sobre';
import Contato from '/src/pages/Contato';
import Exemplos from '../TestComponent/Exemplos';

=======
import Titulo from "../TestComponent/Titulo"
import Props from "../TestComponent/Props"
import Estate from "../TestComponent/Estate"
import Teste from "../SrChrystian/teste"
>>>>>>> 44a6a38e8816f38c1ede9d81e15403d9acedd2f3
function App() {

  return (
      <div>
<<<<<<< HEAD
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home />} />    
            <Route path="Sobre" element={ <Sobre/> } />
            <Route path="contato" element={ <Contato/> } />
            <Route path="Exemplos" element={ <Exemplos/> } />
          </Routes>        
        </BrowserRouter>
      </div>
=======
        <Titulo titulo="Exemplo - Props" cor="darkgreen"/>
        <Props nome="Jomar" idade="53"/>
        <Props nome="Julia"idade="14" />
        <Props idade="20"/>
        <p>Teste texto simples </p>
        <p>segundo paragrafo</p><br />
      </div>
      <div>
        <Titulo titulo="Exemplo - State" cor="blue" />
        <Estate />
        <Estate />
        <Estate />
      </div>
      <div>
        <br />
        <Titulo titulo="Exemplos - chrtystian" cor="lightgreen"/>
        <Teste  />
        
        
      </div>

    </div>
    
>>>>>>> 44a6a38e8816f38c1ede9d81e15403d9acedd2f3
  )
}

export default App

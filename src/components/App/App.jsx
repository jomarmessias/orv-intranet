import Titulo from "../TestComponent/Titulo"
import Props from "../TestComponent/Props"
import Estate from "../TestComponent/Estate"
import Teste from "../SrChrystian/teste"
function App() {

  return (
    <div>
      <div>
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
    
  )
}

export default App
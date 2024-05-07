import Titulo from "../TestComponent/Titulo"
import Corpo from "../TestComponent/Corpo"

function App() {

  
  return (
    <div>
    <Titulo />
    
    <Corpo nome="Stefani" idade="34"/>
    <Corpo nome="Jomar" idade="53"/>
    <Corpo nome="Julia"idade="14" />

    <br />
   
    <p>Teste texto simples </p>
    </div>
  )
}

export default App
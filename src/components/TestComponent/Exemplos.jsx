import Titulo from "../TestComponent/Titulo"
import Props from "../TestComponent/Props"
import Estate from "../TestComponent/Estate"
import Menu from "../../pages/menu/Menu"
function Exemplos() {

  return (
    <div>
      <Menu />
      <h1>Exemplos</h1>
      <div>
        <Titulo titulo="Exemplo - Props" cor="red"/>
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


    </div>
  )
}

export default Exemplos
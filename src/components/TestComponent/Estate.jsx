import { useState } from "react";

function Estate () {
    const [texto, setTexto] = useState("TEXTO ORIGINAL")
    const [inputTexto, setInputTexto] = useState("")
    
    function clicou() {
        setTexto(inputTexto)
    }

    return (
        <div>
            <h3>{texto}</h3>
            <button onClick={ ()=> {setTexto("MUDOU PELO BOTAO")} } >Mudar</button>
            <br />
            <input value={inputTexto} onChange={(e)=>{setInputTexto(e.target.value)}} type="text" />
            <button onClick={clicou}>Altera Texto</button>
        
        </div>

    )

}

export default Estate
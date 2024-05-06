function Corpo( {nome} ) {

    //const nome = "Stefani"
    const idade = "35"
    const urlImg = "https://radiobandeirantesgoiania.com.br/wp-content/uploads/2023/02/329420419_675396077668385_1785164044492867371_n-1068x874.jpg"
    
    
    return (
    <div>
      <h3>Nome: {nome}</h3>
      <h4>Idade: {idade}</h4>
      <img width={100} src={urlImg} />
    </div>
  )

}

export default Corpo
function Props( {nome, idade} ) {

    const urlImg = "https://radiobandeirantesgoiania.com.br/wp-content/uploads/2023/02/329420419_675396077668385_1785164044492867371_n-1068x874.jpg"
    
  return (
    <div>
      <img width={100} src={urlImg} />
      <h3>Nome: {nome ? nome : "Nome nao Informado!"}</h3>
      <h4>Idade: {idade}</h4>
      <br />
    </div>
  )

}

export default Props
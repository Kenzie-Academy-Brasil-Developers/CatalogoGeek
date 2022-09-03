//listar meus produtos

function listarItens1(listaItens1) {

  for (let i = 0; i < listaItens1.length; i++) {

    let item1 = listaItens1[i]

    criarCard1(item1)
  }
}

listarItens1(itens1)

function criarCard1(objeto) {
  let liTag = document.createElement('li')
  let imgUrl = document.createElement('img')
  let nome1 = document.createElement('h3')
  let preco = document.createElement('p')

  imgUrl.classList.add('imagem-card')
  nome1.innerText = objeto.nome
  preco.innerText = `R$ ${objeto.preco}`.replace('.', ',')
  imgUrl.src = objeto.imgUrl

  liTag.appendChild(imgUrl)
  liTag.appendChild(nome1)
  liTag.appendChild(preco)

  let item = document.querySelector('.itens')
  item.appendChild(liTag)
}

listarItens2(itens2)

function criarCard2(objeto2) {
  let liTag2 = document.createElement('li')
  let imgTag2 = document.createElement('img')
  let nome2 = document.createElement('h3')
  let preco2 = document.createElement('p')

  imgTag2.classList.add('imagem-card')
  nome2.innerText = objeto2.nome
  preco2.innerText = `R$ ${objeto2.preco}`.replace('.', ',')
  imgTag2.src = objeto2.imgUrl

  liTag2.appendChild(imgTag2)
  liTag2.appendChild(nome2)
  liTag2.appendChild(preco2)

  let item2 = document.querySelector('.itens2')
  item2.appendChild(liTag2)
}

function listarItens2(listaItens2) {
  
  for (let i = 0; i < listaItens2.length; i++) {

    let item2 = listaItens2[i]

    criarCard2(item2)
  }
}

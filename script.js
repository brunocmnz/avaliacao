function criarElementoImg(src) {
  const userImg = document.createElement("img");
  userImg.src = src;
  return userImg;
}

function criarElementoP(texto = "") {
  const textoP = document.createElement("p");
  textoP.textContent = texto;
  return textoP;
}

function criarElementoH3(texto = "") {
  const textoh3 = document.createElement("h3");
  textoh3.textContent = texto;
  return textoh3;
}

let quantCards = 0;
function criarCard(nome, imgPerfil, texto) {
  const card = document.createElement("div"); //Cria o card
  card.classList.add("card");
  const classe = "card-" + ++quantCards;
  card.classList.add(classe);

  const usuario = document.createElement("div"); //Cria a div Usuario
  usuario.classList.add("usuario");

  const userImg = criarElementoImg(imgPerfil); //Adiciona a imagem
  userImg.classList.add("usuario__imagem");
  usuario.appendChild(userImg);

  const userInfo = document.createElement("div"); //Criando a div com userInfo
  userInfo.classList.add("usuario__info");
  const userName = criarElementoH3(nome); //Adiciona o nome
  userName.classList.add("usuario__nome");
  userInfo.appendChild(userName);

  const verificado = criarElementoH3("Verified Buyer"); //Adiciona o verificado
  verificado.classList.add("verificacao");
  userInfo.appendChild(verificado);

  usuario.appendChild(userInfo); //Adicionando userInfo a usuario

  card.appendChild(usuario); //Adiciona usuario ao card

  const cardContent = criarElementoP(texto); //Adiciona o texto
  cardContent.classList.add("usuario__texto");
  card.appendChild(cardContent);

  const app = document.getElementById("app");
  app.appendChild(card);
}

let quantStars = 0;
function criarAvaliacao(texto = "") {
  const avaliacao = document.createElement("div"); //Cria a avaliacao
  avaliacao.classList.add("avaliacao");
  const classe = "avaliacao-" + quantStars++;
  avaliacao.classList.add(classe);

  const img = document.createElement("img"); //Adiciona a imagem stars
  img.src = "img/stars.svg";
  avaliacao.appendChild(img);

  const textoCompleto = "Rated 5 Stars in " + texto;
  const textoAvaliacao = criarElementoH3(textoCompleto);
  textoAvaliacao.classList.add("avaliacao__texto");
  avaliacao.appendChild(textoAvaliacao);

  const avaliacoes = document.getElementById("avaliacoes");
  avaliacoes.appendChild(avaliacao);
}

// Utilizando a função para criar um card com parâmetros

criarCard(
  "Colton Smith",
  "img/colton.svg",
  "“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”"
);

criarCard(
  "Irene Roberts",
  "img/irene.svg",
  "“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”"
);

criarCard(
  "Anne Wallace",
  "img/anne.svg",
  "“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”"
);

criarAvaliacao("Reviews");
criarAvaliacao("Report Guru");
criarAvaliacao("BestTech");

//essa função é apenas o "gatilho" de todas as outras funções para criptografia da mensagem
function botaoEncrypt() {
  if (collectData() == "") {
    alert("O campo de texto está vazio, insira alguma informação");
    return;
  } else {
    hideDisplay();
    collectData();
    lowerCaseNormalize();
    encryptedData();
    alignData();
    showData();
    botaoCopy();
  }
}

//função de "gatilho" de todas as outras funções para criptografia da mensagem
function botaoDecrypt() {
  if (collectData() == "") {
    alert("O campo de texto está vazio, insira alguma informação");
    return;
  } else {
    hideDisplay();
    collectData();
    lowerCaseNormalize();
    decryptedData();
    alignData();
    showDataDecrypted();
    botaoCopy();
  }
}

//essa função esconde a imagem do menino com a lupa e o texto de mensagem não encontrada que estão no retangulo lateral
function hideDisplay() {
  conjuntoRetangulo = document.getElementById(
    "conjuntoDentroRetangulo"
  ).style.display = "hidden";
}

//essa função coleta o texto inserido pelo usuário através da textarea
function collectData() {
  let dataInput = document.getElementById("dataInput").value;
  return dataInput;
}

//função que transforma o texto coletado em minusculo além de substituir acentos por palavras sem acentos
function lowerCaseNormalize() {
  let normalData = collectData()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return normalData.toLowerCase();
}

//função que criptografa(apenas troca as vogais por palavras) e retorna o texto "criptografado"
function encryptedData() {
  let trocarVogais = lowerCaseNormalize()
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  return trocarVogais;
}

//função que descriptografa(troca as palavras por vogais) e retorna o texto "descriptografado"
function decryptedData() {
  let trocarPalavrasPorVogais = lowerCaseNormalize()
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  return trocarPalavrasPorVogais;
}

//função que altera as classes do retangulo lateral para alinhar o texto ao inicio do retangulo
function alignData() {
  let RetanguloAlign = document.getElementById("conteudo-lateral");
  RetanguloAlign.classList.remove("conteudo_lateral");
  RetanguloAlign.classList.add("conteudo_lateral_jsalt");
}

//função que insere um texto via innerText ao retangulo
function showData() {
  let conjuntoRetangulo = document.getElementById("conjuntoDentroRetangulo");
  conjuntoRetangulo.innerText = encryptedData();
  conjuntoRetangulo.classList.remove("conteudo_lateral_original");
  conjuntoRetangulo.classList.add("estiloResultado");
  return conjuntoRetangulo;
}

function showDataDecrypted() {
  let conjuntoRetangulo = document.getElementById("conjuntoDentroRetangulo");
  conjuntoRetangulo.innerText = decryptedData();
  conjuntoRetangulo.classList.remove("conteudo_lateral_original");
  conjuntoRetangulo.classList.add("estiloResultado");
}
//função que cria o botão de copiar
function botaoCopy() {
  let botaoDeCopiar = document.createElement("botton");
  let botaoTextoCopiar = document.createTextNode("Copiar");
  botaoDeCopiar.setAttribute("id", "botaoCopy");
  botaoDeCopiar.appendChild(botaoTextoCopiar);
  botaoDeCopiar.classList.add("botao_estilo_copiar");
  conjuntoRetangulo = document.getElementById("conjuntoDentroRetangulo");
  conjuntoRetangulo.appendChild(botaoDeCopiar);
  botaoDeCopiar.addEventListener("click", function () {
    botaoDeCopiar.style.display = "none";
    let textoCopiado = document.getElementById(
      "conjuntoDentroRetangulo"
    ).innerText;
    navigator.clipboard.writeText(textoCopiado);
    botaoDeCopiar.style.display = "flex";
    botaoDeCopiar.textContent = "Copiado!";
  });
}

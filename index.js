var pedido =
  "Olhe a foto deste comprovante e responda em UMA linha, sem escrever mais nada, com 2 pedaços separados por |. Primeiro pedaço: o emoji da categoria, o nome do estabelecimento dentro de <strong>, e depois cada item comprado com seu valor, um por linha usando <br>. Segundo pedaço: o total pago, só o número, com ponto e sempre com duas casas decimais. As categorias são: 🛒 Mercado, 🚗 Transporte, 🍔 Comida, 💊 Saúde, 🎉 Lazer, 🏠 Casa, 💸 Outros. Exemplo de resposta: 🍔 <strong>Padaria Pão Quente</strong><br>Pão — R$ 5,00<br>Leite — R$ 4,50|9.50";
var resultado = document.querySelector(".lista");

var total = 0;
var contagem = 0;
async function lerAFoto() {
  var foto = document.querySelector(".Foto").files[0];

  var resposta = await puter.ai.chat(pedido, foto); // enviando o promt para a ia chamada assincrona o await para esperar a resposta do servidor
  var texto = resposta.message.content;
  var partes = texto.split("|"); // split separar tudo q vem antes do "|" e dps dele
  resultado.innerHTML += `
 <div class ="comprovante">
  <div class = "item"> Compras : ${partes[0]}</div>
  <div class = "total-nota">Total da Nota: ${partes[1]} </div>
 </div> 
  `;
  contagem += 1;
  document.querySelector(".contagem").innerHTML = contagem;

  total += Number(partes[1]);
  document.querySelector(".valor").innerHTML = `R$ ${total}`;
  console.log(resposta);
}

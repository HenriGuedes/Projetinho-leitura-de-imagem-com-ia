var pedido =
  "Olhe a foto deste comprovante e responda em UMA linha, sem escrever mais nada, com 2 pedaços separados por |. Primeiro pedaço: o emoji da categoria, o nome do estabelecimento dentro de <strong>, e depois cada item comprado com seu valor, um por linha usando <br>. Segundo pedaço: o total pago, só o número, com ponto e sempre com duas casas decimais. As categorias são: 🛒 Mercado, 🚗 Transporte, 🍔 Comida, 💊 Saúde, 🎉 Lazer, 🏠 Casa, 💸 Outros. Exemplo de resposta: 🍔 <strong>Padaria Pão Quente</strong><br>Pão — R$ 5,00<br>Leite — R$ 4,50|9.50";
var resultado = document.querySelector(".lista");
async function lerAFoto() {
  var foto = document.querySelector(".Foto").files[0];

  var resposta = await puter.ai.chat(pedido, foto); // enviando o promt para a ia chamada assincrona o await para esperar a resposta do servidor
  let texto = resposta.message.content;
  resultado.innerHTML = texto;
  console.log(texto);
}

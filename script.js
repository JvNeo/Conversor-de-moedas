function Converter() {
  //VALOR INSERIDO NO IMPUT
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  console.log("O valor inserido foi " + valor);

  //CONVERSÃO DO STRING PARA NUMERO
  var stringParaNumero = parseFloat(valor);

  //CONVERSÃO PARA REAL
  var valorEmReal = stringParaNumero * 5.26;
  var realFixado = valorEmReal.toFixed(1);
  console.log(valorEmReal);
  console.log(realFixado);
  var elementoValorConvertidoEmReal = document.getElementById(
    "valorConvertidoEmReal"
  );
  var valorConvertidoEmReal = "O resultado em real é R$ " + realFixado;
  elementoValorConvertidoEmReal.innerHTML = valorConvertidoEmReal;

  //CONVERSÃO PARA BITCOIN
  var valorEmBitcoin = stringParaNumero * 0.000021;
  var bitcoinFixado = valorEmBitcoin.toFixed(6);
  console.log(valorEmBitcoin);
  console.log(bitcoinFixado);
  var elementoValorConvertidoEmBitcoin = document.getElementById(
    "valorConvertidoEmBitcoin"
  );
  var valorConvertidoEmBitcoin =
    "O resultado em Bitcoin é BTC " + bitcoinFixado;
  elementoValorConvertidoEmBitcoin.innerHTML = valorConvertidoEmBitcoin;

  //CONVERSÃO PARA EURO
  var valorEmEuro = stringParaNumero * 0.85;
  var euroFixado = valorEmEuro.toFixed(1);
  console.log(valorEmEuro);
  console.log(euroFixado);
  var elementoValorConvertidoEmEuro = document.getElementById(
    "valorConvertidoEmEuro"
  );
  var valorConvertidoEmEuro = "O resultado em Euro é € " + euroFixado;
  elementoValorConvertidoEmEuro.innerHTML = valorConvertidoEmEuro;
}
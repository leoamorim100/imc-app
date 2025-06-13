function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 25) classificacao = "Peso normal";
  else if (imc < 30) classificacao = "Sobrepeso";
  else classificacao = "Obesidade";

  document.getElementById("resultado").innerText =
    `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}
function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
function calculaDesconto() {
  let valor = parseFloat(document.getElementById("preco").value);
  let porcentagem = parseFloat(document.getElementById("desconto").value);

  if (valor > 0 && porcentagem > 0) {
    const valorFinal = valor * (1 - porcentagem / 100);
    const desconto = valor - valorFinal;

    const valorFormatado = formatarMoeda(valor);
    const valorDescontoFormatado = formatarMoeda(desconto);
    const valorFinalFormatado = formatarMoeda(valorFinal);

    console.log("valor:", valor);
    console.log("porcentagem:", porcentagem);
    console.log("desconto:", desconto);
    console.log("valorFinal:", valorFinal);

    alert(
      "O valor original do produto era de: R$ " +
        valorFormatado +
        "\n" +
        "O valor do desconto foi de: R$ " +
        valorDescontoFormatado +
        "\n" +
        "O valor final do produto com o desconto é de: R$ " +
        valorFinalFormatado,
    );
  } else {
    alert("Valores inseridos inválidos. Verifique novamente!");
  }
}

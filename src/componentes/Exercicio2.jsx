function Exercicio2teste() {
  function processarDados() {
    let fatura = {
      cliente: "Joao Silva",
      valor: 250.75,
      vencimento: "2024-07-15",
    };

    let display = document.getElementById("detalhes-fatura");
    display.innerHTML =
      "Cliente: " +
      fatura.cliente +
      "<br>" +
      "Valor: R$ " +
      fatura.valor +
      "<br>" +
      "Vencimento:" +
      fatura.vencimento;
  }
  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", marginTop: "30px" }}
    >
      <h2>Processamento de fatura</h2>
      <button onClick={processarDados}>Processar Dados </button>
      <div
        id="detalhes-fatura"
        style={{ margintop: "10px", fontWeight: "bold" }}
      ></div>
    </div>
  );
}

export default Exercicio2teste;

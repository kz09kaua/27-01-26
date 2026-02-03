function Exercicio6() {
  function CalcularTotal() {
    let produtos = [{ nome: "Produto A", preco: 100.5, imposto: 15 }];
    let resultado = document.getElementById("total-produtos");

    let total = produtos[0].preco + produtos[0].imposto;
    resultado.innerText = `Total: R$ ${total.toFixed(2)}`;
  }

  return (
    <div
      style={{ padding: "20px", border: "2px solid #ccc", marginTop: "10px" }}
    >
      <h2>Calculadora de total de produtos</h2>
      <button onClick={CalcularTotal}>Calcular Total </button>
      <div
        id="total-produtos"
        style={{ marginTop: "10px", fontWeight: "bold" }}
      ></div>
    </div>
  );
}
export default Exercicio6;

function Exercicio4() {
  function DestacarAtraso() {
    let caixa = document.getElementById("mensagem-atraso");
    caixa.style.backgroundColor = "red";
    caixa.innerText = "pagamento";
  }

  return (
    <div
      style={{ padding: "20px", border: "2px solid #ccc", marginTop: "30px" }}
    >
      <h2>Cobrança</h2>
      <div id="mensagem-atraso" style={{}}>
        {" "}
        Status: Normal
      </div>
      <button onClick={DestacarAtraso}>Destacar Atraso </button>
    </div>
  );
}
export default Exercicio4;

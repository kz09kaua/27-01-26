function Exercicioteste7() {
  function atividadeTeste() {
    let primeiroResultado = document.getElementById("primeiro-numero").value;
    let segundoResultado = document.getElementById("segundo-numero");

    let total = segundoResultado + primeiroResultado;
    resultado.innerText = `Total: R$ ${total.toFixed(2)}`;
  }

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        marginTop: "30px",
      }}
    >
      <h2>Calculadora de soma</h2>
      <input
        type="number"
        id="primeiro-numero"
        placeholder="Digite o primeiro numero "
      />
      <input
        type="number"
        id="segundo-numero"
        placeholder="Digite o segundo numero "
      />
      <button onClick={atividadeTeste}>Soma Total</button>

      <div id="resultado"></div>
    </div>
  );
}

export default Exercicioteste7;

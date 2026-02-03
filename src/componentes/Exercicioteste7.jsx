function Exercicioteste7() {
  function atividadeTeste() {
    let primeiroResultado = Number(document.getElementById("primeiro-numero").value);
    let segundoResultado = Number(document.getElementById("segundo-numero").value);

    let soma = document.getElementById("resultado");
    let total = segundoResultado + primeiroResultado;

    soma.innerText = "O resultado é:  " + total;
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

      <div>
        <h2 id="resultado">O resultado é:</h2>
      </div>
    </div>
  );
}

export default Exercicioteste7;

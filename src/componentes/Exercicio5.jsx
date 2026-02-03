function Exercicio5() {
  function SaudarCliente() {
    let nomeDigitado = document.getElementById("nome-cliente").value;
    let mensagem = document.getElementById("mensagem-saudacao");
    mensagem.innerText = "olá, " + nomeDigitado;
  }

  return (
    <div
      style={{ padding: "20px", border: "2px solid #ccc", marginTop: "30px" }}
    >
      <h2>Saudação ao Cliente</h2>
      <input type="text" id="nome-cliente" placeholder="digite seu nome" />
      <button onClick={SaudarCliente}>Saudar</button>
      <div
        id="mensagem-saudacao"
        style={{ marginTop: "10px", fontWeight: "bold" }}
      >
        {" "}
      </div>
    </div>
  );
}
export default Exercicio5;

function Exercicio15() {
  function atualizarStatus() {
    let etiqueta = document.getElementsByClassName("status-ex15")[0];
    etiqueta.innerHTML = "Entrega finalizada hoje";
    etiqueta.style.color = "green";
  }

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", marginTop: "30px" }}
    >
      <h2>Controle de entregas - Exercício 1.5</h2>
      <p className="status-ex15">Pedido em separação...</p>

      <button onClick={atualizarStatus}>Atualizar entrega</button>
    </div>
  );
}

export default Exercicio15;

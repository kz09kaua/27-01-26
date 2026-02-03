function Exercicio1() {
  function atualizarStatus() {
    {
      let etiqueta = document.getElementById("status-entrega");
      etiqueta.innerHTML = "Pedido entregue";

      etiqueta.style.color = "green";
    }
  }
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Controle de entregas</h2>
      <p id="status-entrega">Aguardando entrega....</p>

      <button onClick={atualizarStatus}>Atualizacao de entrega</button>
    </div>
  );
}
export default Exercicio1;

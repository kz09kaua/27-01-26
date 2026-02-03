function Atividade3() {
  function mostrarInsumo() {
    document.getElementById("nome-insumo").innerText = "Insumo Exemplo";
    document.getElementById("foto-insumo").src =
      "https://placecats.com/300/200";
  }

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #ccc",
        marginTop: "10px",
        fontWeight: "bold",
      }}
    >
      <h2>Resultado Estoque</h2>
      <button onClick={mostrarInsumo}>Detalhes Insumo</button>
      <h3 id="nome-insumo" style={{ marginTop: "10px" }}></h3>
      <img
        id="foto-insumo"
        alt="Foto do insumo"
        style={{ marginTop: "10px" }}
      />
    </div>
  );
}

export default Atividade3;

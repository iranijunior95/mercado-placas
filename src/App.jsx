import CardPreview from "./components/CardPreview";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      
      <CardPreview 
        nomeProduto="coxinha dotrigo 300g (sabores)"
        preco="19900"
        descricaoValidade="valída até o dia 11 de novembro"
        corDeFundo="#FFFFFF"
      />

    </div> 
  );
}

export default App;

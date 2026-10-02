import Card from "../../components/Card/Card";
function CentralOperacoes() {
  return (

    <>
      <h1>Le Cookí</h1>

      <div>
        <h2>Central de Operaçõ</h2>
        <p>Veja como está a operação da Le Cookí hoje.</p>
      </div>

      <section className="dashboard-cards">
        <Card
          icone="🍪"
          titulo="Produção de amanhã"
          valor="A calcular"
          detalhe="Conforme a necessidade de produção"

        />
        <Card
          icone="👩‍🏭🏭"
          titulo="Produtos abaixo do mínimo"
          valor="A calcular"
          detalhe="Conforme o estoque mínimo cadastrado"
        />
        <Card
          icone="🛒"
          titulo="Itens para comprar"
          valor="A calcular"
          detalhe="Insumos, limpeza e descartáveis"
        />
        <Card
          icone="📋"
          titulo="Pedidos de hoje"
          valor="A calcular"
          detalhe="Todos os canais de venda"
        />
      </section>
      <button className="close-day-button">
        🌙 Encerrar o Dia
      </button>
      <section className="pending-painel">
        <h3>Pendência de Hoje</h3>

        <section className="pending-panel">
         
          <ul>
            <li>Conferir Insumos</li>
            <li>Conferir Embalagens e Descartáveis</li>
            <li>Conferir Produção</li>
            <li>Conferir Estoque</li>
          </ul>
        </section>
      </section>
    </>
  );
}
export default CentralOperacoes;


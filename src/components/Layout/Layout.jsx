import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Card from "../Card/Card";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout-main">
        <Header />

        <main className="layout-content">
          <h1>Le Cookí</h1>
          <div>
            <h2>Central de Operações</h2>
            <p>Veja como está a operação da Le Cookí hoje.</p>
          </div>

          <section className="dashboard-cards">
            <Card
              icone="🍪"
              titulo="Produção de amanhã"
              valor="1 receita"
              detalhe="Quantidade provisória para teste"
            />

            <Card
            icone="👩‍🏭🏭"
              titulo="Produtos abaixo do mínimo"
              valor="3 sabores"
              detalhe="Estoque mínimo: 10 unidades"
            />

            <Card
            icone="🛒"
              titulo="Itens para comprar"
              valor="4 itens"
              detalhe="Insumos, limpeza e descartáveis"
            />

            <Card
            icone="🎰"
              titulo="Pedidos registrados"
              valor="8 pedidos"
              detalhe="WhatsApp, iFood e 99Food"
            />
          </section>

          <button className="close-day-button">
            🌙 Encerrar o Dia
          </button>
          <section className="pending-panel">
            <h3>Pendência de Hoje</h3>

            <ul>
              <li>Comprar Nutella</li>
              <li>Comprar Embalagens</li>
              <li>Produzir Chocolate</li>
              <li>Conferir Estoque de Pistache</li>
            </ul>
          </section>

        </main>
      </div>
    </div>
  );
}

export default Layout;
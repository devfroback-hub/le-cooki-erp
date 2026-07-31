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
          <div className="dashboard-title">
            <h2>Central de Operações</h2>
            <p>Veja como está a operação da Le Cookí hoje.</p>
          </div>

          <section className="dashboard-cards">
            <Card
              titulo="Produção de amanhã"
              valor="1 receita"
              detalhe="Quantidade provisória para teste"
            />

            <Card
              titulo="Produtos abaixo do mínimo"
              valor="3 sabores"
              detalhe="Estoque mínimo: 10 unidades"
            />

            <Card
              titulo="Itens para comprar"
              valor="4 itens"
              detalhe="Insumos, limpeza e descartáveis"
            />

            <Card
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
              <li>produzir chocolate</li>
              <li>Conferir estoque de Pistache</li>
            </ul>
          </section>

        </main>
      </div>
    </div>
  );
}

export default Layout;
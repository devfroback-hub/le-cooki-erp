import "./Sidebar.css";
import logoLeCooki from "../../images/logo-le-cooki.png";
function Sidebar() {
    return (
    <aside>
      <div className="sidebar-brand">
        <img
  src={logoLeCooki}
  alt="Logo da Le Cookí"
  className="sidebar-logo"
/>
        
          <h2>Sistema Le Cookí</h2>

          <p>Mais que um Cookí,<br/>
           uma experiência.
           </p>
    
      </div>

      <nav>
        <p>🏠 Central de Operações</p>
        <p>📋 Pedidos</p>
        <p>🍪 Produtos</p>
        <p>👥 Clientes</p>
        <p>🏭 Produção</p>
        <p>📦 Estoque</p>
        <p>🛒 Compras</p>
        <p>💰 Financeiro</p>
      </nav>
    </aside>
  );
}

export default Sidebar;
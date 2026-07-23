import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <h1>Dashboard</h1>
        <p>Mais que um Cookí, uma experiência.</p>
      </div>

      <div className="header-user">
        <span>Olá, usuário Le Cookí</span>
      </div>
    </header>
  );
}

export default Header;
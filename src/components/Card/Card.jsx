import "./Card.css";

function Card({ icone, titulo, valor, detalhe }) {
  return (
    <div className="card">
      <div className="card-icon">{icone}</div>

      <div className="card-info">
        <p className="card-titulo">{titulo}</p>
        <strong className="card-valor">{valor}</strong>
        <span className="card-detalhe">{detalhe}</span>
      </div>
    </div>
  );
}

export default Card;
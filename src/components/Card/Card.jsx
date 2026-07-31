import "./Card.css";

function Card({ titulo, valor }) {
  return (
    <div className="card">
      <p className="card-titulo">{titulo}</p>
      <strong className="card-valor">{valor}</strong>
    </div>
  );
}

export default Card;
import { Link } from 'react-router-dom';

function Card({ apartment }) {
  const { title, cover, id } = apartment;

  return (
    <Link to={`/apartments/${id}`} className="card">
      <img src={cover} alt={title} className="img-card" />
      <h2>{title}</h2>
    </Link>
  );
}

export default Card;

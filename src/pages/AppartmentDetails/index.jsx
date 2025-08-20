import { useParams, Navigate } from 'react-router-dom';
import data from '../../data/data.json';

function ApartmentDetails() {
  const { id } = useParams();
  const apartment = data.find((item) => item.id === id);

  if (!apartment) return <Navigate to="/error" replace />;

  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = apartment;

  return (
    <div className="apartment-detail">
      <h1 className="apartment-title">{title}</h1>
      <p className="apartment-location">{location}</p>

      <div className="apartment-pictures">
        {pictures.map((pic, index) => (
          <img key={index} src={pic} alt={`${title} ${index + 1}`} />
        ))}
      </div>

      <div className="apartment-info">
        <div className="host">
          <p>{host.name}</p>
          <img src={host.picture} alt={host.name} />
        </div>

        <p className="description">{description}</p>

        <p className="rating">Rating : {rating} / 5</p>

        <h3>Équipements :</h3>
        <ul>
          {equipments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Tags :</h3>
        <ul className="tags">
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ApartmentDetails;

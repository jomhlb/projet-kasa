import { useParams, Navigate } from 'react-router-dom';
import data from '../../data/data.json';
import Slideshow from '../../components/Slideshow';
import Layout from '../../components/Layout';

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
    <Layout>
      <div className="apartment-detail">
        <Slideshow pictures={pictures} />
        <div className="apartment-info">
          <div className="left">
            <h1 className="apartment-title">{title}</h1>
            <p className="apartment-location">{location}</p>

            <ul className="tags">
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>

          <div className="right">
            <div className="host">
              <p>{host.name}</p>
              <img src={host.picture} alt={host.name} />
            </div>

            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={index < rating ? 'star filled' : 'star'}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="apartment-extra">
          <div className="description-block">
            <h3>Description</h3>
            <p className="description">{description}</p>
          </div>

          <div className="equipments-block">
            <h3>Équipements</h3>
            <ul>
              {equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>{' '}
    </Layout>
  );
}

export default ApartmentDetails;

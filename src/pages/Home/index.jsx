import data from '../../data/data.json';
import Card from '../../components/Card';
import './index.scss';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Chez vous, partout et ailleurs</h1>

      <div className="cards-grid">
        {data.map((apartment) => (
          <Card key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </div>
  );
}

export default Home;

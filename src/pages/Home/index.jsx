import data from "../../data/data.json";
import Card from "../../components/Card";

function Home(){
    return(
        <div className="home-container">
            <h1 className="home-title">Chez vous, partout et ailleurs</h1>

        <div className="cards-grid">
        {data.map((item) => (
          <Card 
            key={item.id} 
            title={item.title} 
            cover={item.cover} 
          />
        ))}
      </div>
    </div>
  )
}

export default Home;
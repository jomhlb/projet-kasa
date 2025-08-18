function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} className="img-card"/>
      <h2>{title}</h2>
    </div>
  )
}

export default Card
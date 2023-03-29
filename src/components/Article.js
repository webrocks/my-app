function Article(props) {
  return (
    <article>
      <img src={props.image} alt={props.alt} />
      <div className="description-section">
        <div className="name-price-section">
          <h3>{props.title}</h3>
          <span>${props.price}</span>
        </div>
        <p>{props.description}</p>
        <a href={props.orderUrl}>
          Order a delivery
        </a>
      </div>
    </article>
  )
}

export default Article;
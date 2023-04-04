import '../styles-sheet/Card.css';



function Card(props) {
  const sizesArray = [];
  {
    for (let i = 0; i < props.array.length; i++) {
      sizesArray.push(<li> {props.array[i]} </li>);

    }
  }
  console.log(sizesArray);

  return (
    <div className="card">
      <div className="imgBox">
        <img
          src={require(`../images/${props.image}.jpeg`)}
          alt={`Imagen de calzado ${props.title}`} />
      </div>
      <div className="details">
        <div className="title">
          <h3>{props.title}<br />
            <small>Zapatilla de {props.topic}</small>
          </h3>
        </div>
        <div className="description">
          <h4>Descripción</h4>
          <p>{props.description}</p>
        </div>
        <div className="size">
          <h4>Talle</h4>
          <ul>
            {sizesArray}
          </ul>
        </div>
        <div className="buy">
          <div className="btn">
            <a href={`https://falconleandro.github.io/${(props.title).replace(/[^\w\s]/gi, "").toLowerCase()}/`}>Agregar</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card;
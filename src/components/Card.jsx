import { logDOM } from '@testing-library/react';
import '../styles-sheet/Card.css';



function Card( props ) {
  const sizesArray = [];
  {for (let i = 0; i < props.array.length; i++) {
    sizesArray.push(<li> {props.array[i]} </li>);
    
  }}
  console.log(sizesArray);

  return (
    <div class="card">
      <div class="imgBox">
        <img
        src={require(`../images/${props.image}.jpeg`)}
        alt={`Imagen de calzado ${props.title}`}/> 
      </div>
      <div class="details">
        <div class="title">
          <h3>{props.title}<br />
            <small>Zapatilla de {props.shoesGenre}</small>
          </h3>
        </div>
        <div class="description">
          <h4>Description</h4>
          <p>{props.description}</p>
        </div>
        <div class="size">
          <h4>Tallas</h4>
          <ul>
            {sizesArray}
          </ul>
        </div>
        <div class="buy">
          <div class="price">
            <sup>$</sup>
            <span>150. <small>55</small></span>
          </div>
          <div class="btn">
            <a href="#">Comprar</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card;
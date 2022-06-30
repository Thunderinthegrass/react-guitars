function Card(props) {
  console.log(props)
  const plus = () => {
    alert(props.title)  
  }

  return (
    <div className="card">
      <button className="favorite-btn">
        <img src="/img/icons/like-inactive.svg" alt="like" />
      </button>
      {/* <a href="#"> */}
        <img width={120} src={props.imageUrl} alt="Гитара" />
        <h5 className="card-title">{props.title}</h5>
      {/* </a> */}
      <div>
        <div className="priceWrapper">
          <span>Цена:</span>
          <b className="price">{props.price}</b>
        </div>
        <button className="plus-button" onClick={() => {plus()}}>
          <img width={11} height={11} src="/img/icons/plus.svg" alt="Плюс" />
        </button>
      </div>
    </div>
  );
}

export default Card;
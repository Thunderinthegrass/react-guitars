function Card() {
  return(
    <div className="card">
            <button className="favorite-btn">
              <img src="/img/icons/like-inactive.svg" alt="like" />
            </button>
            <img width={120} src="/img/guitars/guitar-1.svg" alt="Гитара" />
            <h5 className="card-title">Добротная гитара</h5>
            <div>
              <div className="priceWrapper">
                <span>Цена:</span>
                <b className="price">30 000 руб.</b>
              </div>
              <button className="plus-button">
                <img
                  width={11}
                  height={11}
                  src="/img/icons/plus.svg"
                  alt="Плюс"
                />
              </button>
            </div>
          </div>
  )
}

export default Card;
function Rightside() {
  return(
    <div style={{ display: "none" }} className="rightsideWrapper">
        <div className="rightside">
          <button className="removeRightside">
            <img
              width={25}
              height={25}
              src="/img/icons/remove.svg"
              alt="Убрать"
            />
          </button>
          <div className="rightsideTop">
            <h2>Корзина</h2>
            <div className="cartWrapper">
              <div className="cartItem">
                <img src="img/guitars/guitar-1.svg" alt="Гитара" />
                <div>
                  <p className="cartDescr">Добротная гитара</p>
                  <p className="cartPrice">30 000 руб.</p>
                </div>
                <button className="removeBtn">
                  <img
                    width={20}
                    height={20}
                    src="/img/icons/remove.svg"
                    alt="Убрать"
                  />
                </button>
              </div>
              <div className="cartItem">
                <img src="img/guitars/guitar-1.svg" alt="Гитара" />
                <div>
                  <p className="cartDescr">Добротная гитара</p>
                  <p className="cartPrice">30 000 руб.</p>
                </div>
                <button className="removeBtn">
                  <img
                    width={20}
                    height={20}
                    src="/img/icons/remove.svg"
                    alt="Убрать"
                  />
                </button>
              </div>
              <div className="cartItem">
                <img src="img/guitars/guitar-1.svg" alt="Гитара" />
                <div>
                  <p className="cartDescr">Добротная гитара</p>
                  <p className="cartPrice">30 000 руб.</p>
                </div>
                <button className="removeBtn">
                  <img
                    width={20}
                    height={20}
                    src="/img/icons/remove.svg"
                    alt="Убрать"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="rightsideBottom">
            <div className="orderPrice">
              <span>Итого:</span>
              <div></div>
              <b>30 000 руб.</b>
            </div>
            <button className="designBtn">Оформить заказ</button>
          </div>
        </div>
      </div>
  )
}

export default Rightside;
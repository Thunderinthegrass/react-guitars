function App() {
  return (
    <div className="wrapper">
      <div className="rightsideOwerlay">
        <div className="rightside">
          <div className="dirgtsideTop">
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

      <header>
        <div className="headerLeft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            viewBox="0 0 553.84 1785.6"
            fill="#3c3f41"
            // fill="#09dce4"
          >
            <path
              class="cls-1"
              d="M2708.91-678.17l3.44,10c2.71,8.13,4.65,13.55-1.93,18.58-18.58,10.84-20.9,31.74-20.9,31.74l31,861.29c42.07,95,111.78,31.55,128.39,2.45,20.26-38.58,20.26-65.16,20.26-78.71s.39-19.74,5.42-24.38c10.84-6.2,15.1-.78,21.93,9.54,32,64,6.2,141.42-22.19,198.71s13.42,108.78,42.32,162.33c84.65,163.87,13.68,244.9,13.68,244.9-26.58,41.29-74.1,55.64-99.87,65.55-18.07,8.26-174.45,26.84-262.19,11.35-82-20-120.26-45.93-151.23-113.54s-1-171.88,43.87-275.62c47.48-98.58,6.19-167.22-7.22-201.29s-30.46-72.77-30.46-109.42c-.51-85.67,51.62-108.38,51.62-108.38s20.64,0,18.06,16c-6.19,34.06-4.64,33.54-4.64,63,6.19,54.2,42.32,116.65,85.67,111.49s41.29-41.29,41.29-41.29-3.09-710.71-3.61-760.26,2.07-61.94-48.83-97.55c31.17-109.94.57-209,.57-209-1.29-3.87,0-3.87,0-3.87s5.68,3.61,16.78,2.06,25.29-41,28.9-49,10.32,3.35,10.32,3.35L2635.59-891l7-1.29s1.29-8.26,4.13-11.87c5.16-1.55,11.35-3.61,11.35-3.61s15.49,8,7.74,29.93L2655.71-875s-6.45-4.65-8.65-8.65c-1.8.52-7.48,4.23-7.48,4.23h0l9.77,28.36,6.86-1.27s1.29-8.26,4.13-11.87c5.16-1.55,11.36-3.62,11.36-3.62s15.48,8,7.74,29.94L2669.37-835s-6.45-4.65-8.64-8.65c-1.81.52-7.4,4.17-7.4,4.17l9.24,26.84,6.54-1.21s1.29-8.26,4.13-11.88c5.16-1.54,11.35-3.61,11.35-3.61s15.49,8,7.74,29.94l-10.06,2.84s-6.45-4.65-8.65-8.65c-1.8.52-7.12,4-7.12,4l10.66,30.93,6.73-1.25s1.29-8.26,4.13-11.87c5.16-1.55,11.36-3.61,11.36-3.61s15.48,8,7.74,29.93l-10.07,2.84s-6.45-4.64-8.64-8.64c-1.81.51-7.29,4.09-7.29,4.09l9.21,26.73,7.33-1.43s1.29-8.26,4.13-11.88c5.16-1.54,11.35-3.61,11.35-3.61s15.49,8,7.74,29.94l-10.06,2.84s-6.45-4.65-8.65-8.65c-1.8.52-7.82,4.47-7.82,4.47l10.55,30.64,7.15-1.31s1.29-8.26,4.13-11.87c5.16-1.55,11.35-3.62,11.35-3.62s15.49,8,7.74,29.94l-10.06,2.84s-6.45-4.65-8.65-8.65C2714.76-681.94,2708.91-678.17,2708.91-678.17Z"
              transform="translate(-2404.3 944.44)"
            />
          </svg>

          <div className="headerInfo">
            <h3>Guitars</h3>
            <p>Гитарный магазин</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img src="/img/icons/basket.svg" alt="Корзина" />
            <span>12000 р.</span>
          </li>
          <li>
            <img src="/img/icons/favorites.svg" alt="Корзина" />
          </li>
          <li>
            <img src="/img/icons/user.svg" alt="Пользователь" />
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="contentTop">
          <h1 className="contentTitle">Все гитары</h1>
          <div className="search">
            <img
              width={25}
              height={25}
              src="/img/icons/search.svg"
              alt="Поиск"
            />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="contentWrapper">
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
          <div className="card">
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
          <div className="card">
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
          <div className="card">
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
        </div>
      </div>
    </div>
  );
}

export default App;

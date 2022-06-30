import Card from "./components/Card";
import Header from "./components/Header";
import Rightside from "./components/Rightside";

const arr = [
  {
    name: "Добротная гитара",
    price: "30 000",
    imageUrl: "/img/guitars/guitar-1.svg",
  },
  {
    name: "Крепкая гитара",
    price: "33 000",
    imageUrl: "/img/guitars/guitar-2.svg",
  },
  {
    name: "Старинная гитара",
    price: "30 000",
    imageUrl: "/img/guitars/guitar-3.svg",
  },
  {
    name: "Красная гитара",
    price: "31 000",
    imageUrl: "/img/guitars/guitar-4.svg",
  },
  {
    name: "Синяя гитара",
    price: "35 000",
    imageUrl: "/img/guitars/guitar-1.svg",
  },
  {
    name: "Зелёная гитара",
    price: "34 000",
    imageUrl: "/img/guitars/guitar-2.svg",
  },
  {
    name: "Чёрная гитара",
    price: "32 000",
    imageUrl: "/img/guitars/guitar-3.svg",
  },
  {
    name: "Вишнёвая гитара",
    price: "37 000",
    imageUrl: "/img/guitars/guitar-4.svg",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Rightside />
      <Header />
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
          {arr.map((obj) => (
            <Card title={obj.name} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

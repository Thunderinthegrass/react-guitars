import Card from "./components/Card"
import Header from "./components/Header"
import Rightside from "./components/Rightside";

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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">7Seasons Apartments Budapest</span>
        <span className="fpCity">Teresvaros, Hungary, Budapest</span>
        <span className="fpPrice">Starting from $132</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/126708403.webp?k=a137138b895d53d9c0cd31f99f272b833b605441d0670a40c24007fdbb45bb70&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">P&J Luxury Apartments</span>
        <span className="fpCity">Old Town, Poland, Krakow</span>
        <span className="fpPrice">Starting from $64</span>
        <div className="fpRating">
          <button>8.2</button>
          <span>Very Good</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/117127036.webp?k=7f59e52c89ee2a4b3910118542f585c4cce52fc46627413eb08b760076b9f72d&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Michalská 2 - Old Town Apartment</span>
        <span className="fpCity">Prague 1, Czech Republic, Prague</span>
        <span className="fpPrice">Starting from $82</span>
        <div className="fpRating">
          <button>8.6</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/32087410.webp?k=5ba581c5195ca4c5eedd0f4aa9628cf05b98aaa35bf7aaa0cfa010b95590a6c4&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Luxury Apartments Klara</span>
        <span className="fpCity">Znjan, Croatia, Split</span>
        <span className="fpPrice">Starting from $207</span>
        <div className="fpRating">
          <button>9.6</button>
          <span>Exceptional</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;

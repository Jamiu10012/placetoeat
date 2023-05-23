import Navbar from "../../components/navbar";
import "./style.css";
const Home = () => {
  return (
    <div className="home-body-container">
      <div className="overlay">
        <Navbar />
        <div className="home-content">
          <div className="headline-text">Find New Places To Eat</div>
          <div className="search-container">
            <input type="text" placeholder="Where to?" />
            <button className="let-eat">Let’s eat!</button>
          </div>
          <div className="filter-main">
            <div className="filter-box">
              <input type="checkbox" className="checkbox" />
              <div className="food-pref">Food Preferences</div>
            </div>
            <div className="filter-box">
              <input type="checkbox" className="checkbox" />
              <div className="food-pref">Other Options</div>
            </div>
          </div>
          <div className="recent">Recent Searches</div>
          <div className="location-list">
            Philadelphia, Lagos, Mykonos, South of Spain, Empanadas in San Diego
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

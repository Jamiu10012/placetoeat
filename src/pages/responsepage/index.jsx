import "./style.css";
import Navbar from "../../components/navbar";
import ResponseCol from "../../components/resCol";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
const ResponsePage = ({ input }) => {
  const text = `Top Restaurants in ${input || "[City]"}`;
  const upperCaseText = text.toUpperCase();
  return (
    <div className="response-container">
      <Navbar className={"res-btn"} logo={"res-logo"} />
      <div className="head-con">
        <div className="response-headline">{upperCaseText}</div>
        <span className="based">Based on your preferences:</span>
        <div className="box-bbt">
          <div className="three-btnd">
            <div className="each-btn">Middle Eastern</div>
            <div className="each-btn">Vegetarian</div>
            <div className="each-btn">Kosher</div>
            <div className="each-btn">Sushi</div>
            <div className="each-btn">Pizza</div>
            <div className="each-btn">Pasta</div>
          </div>
          <div className="sec-btnd">
            <div className="green-btn">Middle Eastern</div>
            <div className="green-btn">Vegetarian</div>
          </div>
        </div>
      </div>
      <div className="respond-content">
        <ResponseCol />
        <ResponseCol />
        <ResponseCol />
      </div>
      <div className="share-list">
        <div className="share-text">Share your list</div>
        <div className="share-icons-container">
          <FaFacebookSquare className="socio-icon" />
          <FaInstagramSquare className="socio-icon" />
          <AiFillTwitterSquare className="socio-icon" />
        </div>
      </div>
    </div>
  );
};

export default ResponsePage;

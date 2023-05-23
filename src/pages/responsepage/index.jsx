import "./style.css";
import Navbar from "../../components/navbar";
import ResponseCol from "../../components/resCol";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
const ResponsePage = () => {
  return (
    <div className="response-container">
      <Navbar className={"res-btn"} logo={"res-logo"} />
      <div className="response-headline">
        Top Options Based on <span> Your Preferences</span>
      </div>
      <div className="respond-content">
        <ResponseCol />
        {/* <ResponseCol />
        <ResponseCol /> */}
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

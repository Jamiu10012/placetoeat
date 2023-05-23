import "./style.css";
import Navbar from "../../components/navbar";
import ResponseCol from "../../components/resCol";
const ResponsePage = () => {
  return (
    <div className="response-container">
      <Navbar className={"res-btn"} logo={"res-logo"} />
      <div className="response-headline">
        Top Options Based on <span> Your Preferences</span>
      </div>
      <div className="respond-content">
        <ResponseCol />
        <ResponseCol />
        <ResponseCol />
      </div>
    </div>
  );
};

export default ResponsePage;

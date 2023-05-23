import { FaPhoneAlt } from "react-icons/fa";
const ResponseCol = () => {
  return (
    <div className="res-col-container">
      <div className="res-title">
        <a href="www.none.com">Zahav</a>
      </div>
      <div className="res-address">
        <div className="add-left">Middle Eastern</div>
        <div className="add-right">237 St James Pl. Philadelphia, PA 19148</div>
      </div>
      <div className="dollar-phone-vegeterian">
        <div className="res-dollars">
          <div className="dolls">$</div>
          <div className="dolls">$</div>
          <div className="dolls">$</div>
          <div className="dolls diff">$</div>
        </div>
        <div className="phone-no">
          <FaPhoneAlt className="pho-icon" />
          <div className="phone-text">1-714-463-0658</div>
        </div>
        <div className="three-btnd">
          <div className="each-btn">Middle Eastern</div>
          <div className="each-btn">Vegetarian</div>
          <div className="each-btn">Kosher</div>
        </div>
      </div>
      <div className="res-body-content">
        <div className="res-body-text">
          Few things in life will train you for the rejection you’ll face when
          trying to reserve a table at Zahav. Only going to the DMV on a
          Saturday can really come close. <a href="www.none.com">Read more.</a>
        </div>
      </div>
    </div>
  );
};

export default ResponseCol;

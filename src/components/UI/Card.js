import { Link } from "react-router-dom";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`card ${classes.each_card}`}>
      <div className="card-body">
        <h5 className="card-title">{props.card.title}</h5>
        <p className="card-text">{props.card.description}</p>
        <Link to="" className="card-link">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

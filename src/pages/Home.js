import { Fragment } from "react";
import Banner from "../components/UI/Banner";
import Card from "../components/UI/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
    },
    {
      id: 2,
      title: "Card 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
    },
  ];

  return (
    <Fragment>
      <Banner />
      <div className={`row ${classes.display_flex}`}>
        {cards.map((eachCard, i) => (
          <Card card={eachCard} key={eachCard.id} />
        ))}
      </div>
    </Fragment>
  );
};

export default Home;

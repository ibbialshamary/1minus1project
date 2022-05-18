import React from "react";
import classes from "./OurGames.module.scss";

const OurGames = () => {
  return (
    <div className={`${classes.container}`}>
      <div className={classes["container__item"]}>
        <div className={classes["container__item--funplus"]}>
          <p className={classes.uppercase}>Funplus</p>
          <hr className={classes.solid} />
        </div>
      </div>
      <div className={classes["container__item"]}>
        <h1>
          Our <br />
          <span>Games</span>
        </h1>
      </div>
      <div className={classes["container__item"]}>
        <p className={classes.context}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          cupiditate totam, error est, consequuntur blanditiis debitis voluptate
          nesciunt aliquam quis assumenda iure commodi vero dolorem ea ratione
          non eos deserunt.
        </p>
      </div>
    </div>
  );
};

export default OurGames;

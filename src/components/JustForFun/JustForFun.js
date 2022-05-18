import React from "react";
import classes from "./JustForFun.module.scss";
import { BsPlusLg } from "react-icons/bs";
import { IconContext } from "react-icons";
import GirlWeapon from "../../assets/images/girl-holding-weapon.png";
import StatIcon from "../../assets/images/stat-icon.png";
const JustForFun = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sections}>
        <div className={classes["sections__section-1"]}>
          <div className={classes["sections__section-1__items"]}>
            <h1>
              Just for
              <br />
              <span>fun</span>
            </h1>
            <br />
            <p>
              We Create Leading Innovative and
              <br /> Fun Experiences Worldwide
            </p>
            <br />
            <br />
            <button>
              <div className={classes["button-content"]}>
                <IconContext.Provider value={{ color: "FF4800" }}>
                  <BsPlusLg />
                </IconContext.Provider>
                <p>Do this</p>
              </div>
            </button>
          </div>
        </div>
        <div className={classes["sections__section-2"]}>
          <img src={GirlWeapon} alt="Girl Holding Weapon" />
        </div>
      </div>
      <div className={classes.stats}>
        <div className={classes["stats__stat"]}>
          <div className={classes["stats__stat--content"]}>
            <h1>2M</h1>
            <p>This statistic</p>
          </div>
          <div>
            <img src={StatIcon} alt="" />
          </div>
        </div>
        <div className={classes["stats__stat"]}>
          <div className={classes["stats__stat--content"]}>
            <h1>600m</h1>
            <p>This statistic</p>
          </div>
          <div>
            <img src={StatIcon} alt="" />
          </div>
        </div>
        <div className={classes["stats__stat"]}>
          <div className={classes["stats__stat--content"]}>
            <h1>1.8k</h1>
            <p>This statistic</p>
          </div>
          <div>
            <img src={StatIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustForFun;

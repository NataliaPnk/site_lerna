import React from "react";
import s from "../NavMenu/index.module.css";
import leftPartIcon01 from "../NavMenu/media/leftPartIcon01.png";
import leftPartIcon02 from "../NavMenu/media/leftPartIcon02.png";
import leftPartIcon03 from "../NavMenu/media/leftPartIcon03.png";
import leftPartIcon04 from "../NavMenu/media/leftPartIcon04.png";
import leftPartIcon05 from "../NavMenu/media/leftPartIcon05.png";
import leftPartIcon06 from "../NavMenu/media/leftPartIcon06.png";
import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <header className={s.navMenu}>
      <nav>
        <Link to="/learning">
          <div>
            {" "}
            <img src={leftPartIcon01} /> <p>My learning</p>{" "}
          </div>
        </Link>
        <div>
          {" "}
          <img src={leftPartIcon02} /> <p>My orders</p>{" "}
        </div>
        <div>
          {" "}
          <img src={leftPartIcon03} /> <p>My tests</p>{" "}
        </div>
        <div>
          {" "}
          <img src={leftPartIcon04} /> <p>Bonus tokens</p>{" "}
        </div>
        <div>
          {" "}
          <img src={leftPartIcon05} /> <p>Referral program</p>{" "}
        </div>
        <Link to="/">
          <div>
            {" "}
            <img src={leftPartIcon06} /> <p>Help</p>{" "}
          </div>
        </Link>
      </nav>
    </header>
  );
}

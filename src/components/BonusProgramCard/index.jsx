import React from "react";
import s from "../BonusProgramCard/index.module.css";

export default function BonusProgramCard({ id, title, bonus, icon }) {
  return (
    <div className={s.bonusProgramCard}>
      <p>
        <span style={{ fontWeight: "bold", fontSize: "22px" }}>{title[0]}</span>
        <br />
        <span style={{ fontWeight: "normal", fontSize: "17px" }}>
          {title[1]}
        </span>
      </p>

      <div>
        <p>
          <span style={{ fontWeight: "bold", fontSize: "28px" }}>
            {bonus[0]}
          </span>
          <br />
          <span style={{ fontWeight: "normal", fontSize: "15px" }}>
            {bonus[1]}
          </span>
        </p>
        <img src={icon} />
      </div>
    </div>
  );
}

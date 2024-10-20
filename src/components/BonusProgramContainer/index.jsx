import React, { useContext } from "react";
import BonusProgramCard from "../BonusProgramCard";
import s from "./index.module.css";
import { Context } from "../../context";

export default function BonusProgramContainer() {
  const { bonus } = useContext(Context);

  return (
    <div className={s.bonusProgramContainer}>
      {bonus.map((el) => (
        <BonusProgramCard key={el.id} {...el} />
      ))}
    </div>
  );
}

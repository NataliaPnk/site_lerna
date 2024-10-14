import React, { useContext } from "react";
import TestCard from "../TestCard";
import { Context } from "../../context";
import s from "../TestContainer/index.module.css";

export default function TestContainer() {
  const { tests } = useContext(Context);

  return (
    <div className={s.testContainer}>
      {tests.map((el) => (
        <TestCard key={el.id} {...el} />
      ))}
    </div>
  );
}

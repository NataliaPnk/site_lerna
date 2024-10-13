import React from "react";
import s from "./index.module.css";
import MyLearningList from "../MyLearningList";
import NavMenu from '../NavMenu'

export default function MyLearningContainer({ learningCards }) {
  return (
    <div className={s.myLearningContainer}>
      <NavMenu />
      <div className={s.rightPart}>
        <h2>My Learning</h2>
        <div className={s.options}>
          <p>All</p>
          <p>Corporate courses</p>
          <p>Personal courses</p>
        </div>
        <MyLearningList learningCards={learningCards} />
      </div>
    </div>
  );
}

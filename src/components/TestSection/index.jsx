import React from "react";
import TestContainer from "../TestContainer";
import NavMenu from "../NavMenu";
import s from "../TestSection/index.module.css";

export default function TestSection() {
  return (
    <div className={s.testSection}>
      <NavMenu />
      <div className={s.rightPart}>
        <h2>My tests</h2>
        <div className={s.textContent}>
          <div>
            Appointed by the employer<span>4</span>
          </div>
          <div>
            Personal tests<span>1</span>
          </div>
        </div>
        <dive className={s.line}></dive>
        <TestContainer />
      </div>
    </div>
  );
}

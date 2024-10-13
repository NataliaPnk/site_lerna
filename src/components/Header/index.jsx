import React from "react";
import s from "../Header/index.module.css";
import firmLabel from "../Header/media/firmLabel.png";
import iconToken from "../Header/media/iconToken.png";
import questionMark from "../Header/media/questionMark.png";
import iconPhotoProfile from "../Header/media/iconPhotoProfile.png";

export default function Header() {
  return (
    <div className={s.header}>
      <img src={firmLabel} />

      <div className={s.rightSite}>
        <div className={s.catalogWrapper}>
          <p>Catalog</p>
          <div className={s.buttonMyLearning}>
            <p>My learning</p> <img src={iconToken} />
          </div>
        </div>

        <img src={questionMark} className={s.questionMark} />

        <div className={s.buttonTokens}>
          250 tokens <img src={iconPhotoProfile} />{" "}
        </div>
      </div>
    </div>
  );
}

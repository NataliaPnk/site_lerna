import React from "react";
import s from "../ProfileCard/index.module.css";

import profilePhoto from "../ProfileCard/media/profilePhoto.png";
import photoEditIcon from "../ProfileCard/media/photoEditIcon.png";
import crossIconInput from "../ProfileCard/media/crossIconInput.png";
import plusIconButton from "../ProfileCard/media/plusIconButton.png";

export default function ProfileCard() {
  return (
    <div className={s.profileCardOuterContainer}>
      <div className={s.profileCardInnerContainer}>
        <div className={s.photoContentWrapper}>
          <img src={profilePhoto} />
          <div className={s.photoEditPart}>
            <h3>Profile's photo</h3>
            <button>
              {" "}
              <img src={photoEditIcon} /> Edit profile's photo
            </button>
          </div>
        </div>

        <p>Main information</p>
        <div className={s.inputWrapper}>
          <input type="text" placeholder="Alexander" />
          <img src={crossIconInput} />
        </div>
        <div className={s.inputWrapper}>
          <input type="text" placeholder="Petrov" />
          <img src={crossIconInput} />
        </div>
        <div className={s.inputWrapper}>
          <input type="tephonext" placeholder="+49234567867" />
        </div>

        <p>Hobbies</p>
        <button className={s.buttonAdd}>
          {" "}
          <img src={plusIconButton} /> Add
        </button>
        <button className={s.buttonSubmit}>Save changed</button>
      </div>
    </div>
  );
}

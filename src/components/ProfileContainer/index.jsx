import React from "react";
import s from "../ProfileContainer/index.module.css";
import NavMenu from "../NavMenu";
import iconArrow from "../ProfileContainer/media/iconArrow.png";
import ProfileCard from "../ProfileCard";

export default function ProfileContainer() {
  return (
    <div className={s.profileContainer}>
      <NavMenu />
      <div className={s.rightPart}>
        <div className={s.backToProfile}>
          {" "}
          <img src={iconArrow} /> <p>Back to profile</p>
        </div>
        <h2>Edit profile</h2>
        <ProfileCard />
      </div>
    </div>
  );
}

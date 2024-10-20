import React from "react";
import s from "../ReferralContainer01/index.module.css";
import photo from "../ReferralContainer01/media/photo.png";
import iconCopy from "../ReferralContainer01/media/iconCopy.png";

export default function ReferralContainer01() {
  return (
    <div className={s.referralContainer01}>
      <div>
        <h3>
          <span>Give your friends a discount </span>
          <span style={{ color: "#F60065" }}>up to 65%</span>
          <br />
          <span>on the purchase of course on Lerna</span>
        </h3>
        <div>
          {" "}
          lerna.by/v21gnvl{" "}
          <button>
            {" "}
            <img src={iconCopy} /> Copy
          </button>
        </div>
      </div>
      <img src={photo} />
    </div>
  );
}

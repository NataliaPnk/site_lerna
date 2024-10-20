import React from "react";
import s from "../ReferralContainer02/index.module.css";
import iconNumberOne from "../ReferralContainer02/media/iconNumberOne.png";
import iconNumberTwo from "../ReferralContainer02/media/iconNumberTwo.png";

export default function ReferralContainer02() {
  return (
    <div className={s.referralContainer02}>
      <h3>How does this work?</h3>
      <div>
        <div>
          <img src={iconNumberOne} />
          <div>
            <h4>What do you need to do</h4>
            <p>
              Copy the link, send it to your friends or post it on social
              networks
            </p>
          </div>
        </div>

        <div>
          <img src={iconNumberTwo} />
          <div>
            <h4>What a friend needs to do</h4>
            <p>
              Follow your link and choose a course on Lerna. The discount is
              activated automatically by the link
            </p>
          </div>
        </div>
      </div>

      <span></span>

      <h3>What is important to know</h3>
      <ul>
        <li>
          Maximum discount for friends is 55%. It cannot be combined with other
          offers.
        </li>
        <li>
          Your friends can use your link to buy as many courses as the wants at
          any time.{" "}
        </li>
        <li>
          If your friend and you buy several courses - then you get an
          additional discount.{" "}
        </li>
      </ul>
    </div>
  );
}

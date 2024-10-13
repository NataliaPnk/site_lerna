import React from "react";
import s from "../MyOrderCard/index.module.css";

export default function MyOrderCard({
  id,
  picture,
  title,
  description,
  isPaid,
  paymentDay,
  duration,
  start,
  price,
  oldPrice,
}) {
  return (
    <div className={s.myOrderCard}>
      <div className={s.upPart}>
        <img src={picture} />
        <div className={s.titleContent}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={s.isPaid}>
          <span>{isPaid}</span>
          <p>{paymentDay}</p>
        </div>
      </div>

      <div className={s.line}></div>

      <div className={s.details}>
        <div>
          {" "}
          Duration <span>{duration}</span>
        </div>
        <div>
          {" "}
          Start <span>{start}</span>
        </div>
        <div>
          {" "}
          Price <span>{price}</span>{" "}
        </div>
        <p>{oldPrice}</p>

        <button>More details</button>
      </div>
    </div>
  );
}

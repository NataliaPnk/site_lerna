import React from "react";
import s from "../MyLearningCard/index.module.css";

export default function MyLearningCard({
  id,
  picture,
  title,
  description,
  isHomework,
  modules,
  videos,
  hometasks,
  tests,
  projects,
  fullDurationLine,
  fullDurationNumber,
  durationLine,
  durationNumber,
}) {
  return (
    <div className={s.myLearningCard}>
      <div className={s.upPart}>
        <img src={picture} />
        <div className={s.titleContent}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{isHomework}</p>
        </div>
        <button>Go to learning</button>
      </div>

      <div className={s.details}>
        <div>
          {" "}
          Modules: <span>{modules}</span>{" "}
        </div>
        <div>
          {" "}
          Videos: <span>{videos}</span>{" "}
        </div>
        <div>
          {" "}
          Hometasks: <span>{hometasks}</span>{" "}
        </div>
        <div>
          {" "}
          Tests: <span>{tests}</span>{" "}
        </div>
        <div>
          {" "}
          Projects: <span>{projects}</span>{" "}
        </div>
      </div>

      <div className={s.durationPart}>
        <div
          style={{
            backgroundColor: fullDurationLine,
            width: fullDurationNumber,
            height: "6px",
            marginTop: "10px",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: durationLine,
              width: durationNumber,
              height: "6px",
              marginTop: "10px",
              borderRadius: "10px",
              position: "absolute",
              bottom: "0px",
            }}
          />
        </div>
        {durationNumber}
      </div>
    </div>
  );
}

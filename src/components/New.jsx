import React from "react";

const ContentComponent = ({ content, title, link, img, day }) => {
  return (
    <a className="new" href={link}>
      <img src={img}></img>
      <div className="new-title">{title}</div>
      <div className="new-text">{content}</div>
      <div className="new-day">
        <span>
          {day.split(" ")[0] +
            " " +
            day.split(" ")[1] +
            " " +
            day.split(" ")[2] +
            " " +
            day.split(" ")[3]}
        </span>
      </div>
    </a>
  );
};

export default ContentComponent;

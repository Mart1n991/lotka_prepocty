import React from "react";

export default function Shape({ shape, shapeType, onClick, name, className }) {
  return (
    <div className={className} onClick={onClick}>
      <img src={shape} alt={shapeType} name={name} />
    </div>
  );
}

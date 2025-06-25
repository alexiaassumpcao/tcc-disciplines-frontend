import React from "react";

const CircleIcon = ({ letter, bgColor, size = 50, textColor = "#fff" }) => {
  const circleStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: size,
    height: size,
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: "50%",
    fontSize: size / 2.5,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: "5px",
  };

  return <div style={circleStyle}>{letter}</div>;
};

export default CircleIcon;

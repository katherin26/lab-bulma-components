import React from "react";
import "./CoolButton.css";
import "bulma/css/bulma.css";

export default function CoolButton(props) {
  const bulmaClasses = ["button"];

  switch (props.type) {
    case "danger":
      bulmaClasses.push("is-danger");
      break;
    case "success":
      bulmaClasses.push("is-success");
      break;
    case "info":
      bulmaClasses.push("is-info");
  }

  switch (props.size) {
    case "sm":
      bulmaClasses.push("is-small");
      break;
    case "md":
      bulmaClasses.push("is-medium");
      break;
    case "lg":
      bulmaClasses.push("is-large");
      break;
  }

  if (props.isRounded) bulmaClasses.push("is-rounded");

  return <button className={bulmaClasses.join(" ")}>{props.name}</button>;
}

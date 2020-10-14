import _ from "lodash";
import "./styles.css";
import Icon from "./dummy.png";

const component = () => {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  return element;
};

document.body.appendChild(component());

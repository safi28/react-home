import React from "react";
import Link from "../../shared/Link/Link";
const Button = (props) => {
  return (
    <Link to={props.linkTo}>
      <button id={props.id} type='button' onClick={props.onClick} className={props.className}>{props.title}</button>
    </Link>
  );
};
export default Button;

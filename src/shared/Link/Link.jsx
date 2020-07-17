import React from 'react'
import { Link as ReactRouterDomLink } from 'react-router-dom';
const Link = ({ children, to, cmp }) => {
  return <li>
      <ReactRouterDomLink to={to} component={cmp}>{children}</ReactRouterDomLink>
    </li>;
}
export default Link
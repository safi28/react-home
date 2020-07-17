import React from 'react';
import Link from '../../shared/Link/Link';
function Aside({ isLogged }) {
  return <aside className="Aside">
    <ul>
      <Link to="/">Posts</Link>
      {isLogged && <Link to="/create-product">New Post</Link>}
      {isLogged && <Link to="/profile">Profile</Link>}
      {!isLogged && <Link to="/register">Register</Link>}
      {!isLogged && <Link to="/signin">Login</Link>}
    </ul>
  </aside>;
};

export default Aside;
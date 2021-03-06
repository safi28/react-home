import React from 'react'
import Icons from './Icons'
import Logo from './Logo'
import styles from "../../../styles/dashboard.module.css";
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className={styles["vertical-menu-wrapper"]}>
        <Logo  />
         <ul className={styles["vertical-menu"]}>
           <span id={styles["social"]}>
             <Link to='/'><Icons image={require("../../../static/images/dashboard.png")} name="Dashboard"/></Link> 
             <Link to='/api/user/basket/:id'><Icons image={require("../../../static/images/purchase2.png")} name="Your cart"/></Link>  
             <Link to='/api/products/smart'><Icons image={require("../../../static/images/energy.png")} name="Home Automation"/></Link> 
             <Link to='/api/products/interior'><Icons image={require("../../../static/images/interior.png")} name="Interior Design"/></Link> 
             <hr />
             <li className={styles["dash-li"]}>Setting</li>
             <li className={styles["dash-li"]}>Privacy</li>
             <li id={styles["user-info"]}>
               <span>online</span>
             </li>
           </span>
         </ul>
       </nav>
    )
}
export default Menu
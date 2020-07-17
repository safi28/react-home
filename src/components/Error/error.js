import React from 'react'
import styles from './error.module.css'
import Link from '../../shared/Link/Link'
const Error = (props) => {
    return (
        <div className={props.style}>
        <div className={props.page}>
            <img className={styles.bug} src={require('../../static/images/error.png')} />
            <h2 className={styles.title}> Ooops error 😓</h2>
            <Link to={'/'}><div className={styles.redirect}>Get back</div></Link>
        </div>
        </div>
    )
}
export default Error
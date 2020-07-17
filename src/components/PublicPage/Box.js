import React from 'react'
import styles from './styles/box.module.css'
const Box = (props) => {
  return (
    <div className={styles[props.mainStyle]}>
      <div className={styles.bg}></div>
      <div className={styles.details}>
        <h1>{props.title}</h1>
        <p>
          {props.description}
        </p>
        <button className={styles[props.buttonStyle]}>Check Now</button>
      </div>
      <div className={styles.illustration}>
        <div className={styles.inner}></div>
      </div>
    </div>
  )
}
export default Box
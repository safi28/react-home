import React from 'react'
import styles from './styles/box.module.css'
import Button from '../../../components/Button'
const Box = (props) => {
  return (
    <div className={styles[props.mainStyle]}>
      <div className={styles.bg}></div>
      <div className={styles.details}>
        <h1>{props.title}</h1>
        <p>
          {props.description}
        </p>
        <Button id={'redirect-btn'} linkTo='/api/user/signin' className={styles[props.buttonStyle]} title={"Check Now"} />
      </div>
      <div className={styles.illustration}>
        <div className={styles.inner}></div>
      </div>
    </div>
  )
}
export default Box
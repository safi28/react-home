import React from 'react'
import styles from './error.module.css'
import Error from './error'

const NotFound = () => {
    return (
        <Error style={styles.cmp} page={styles.page} />
    )
}
export default NotFound
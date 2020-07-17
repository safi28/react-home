import React from 'react'
import styles from './error.module.css'
import Error from './error'

const notFoundCmp = () => {
    return (
        <Error style={styles.format} page={styles.oops} />
    )
}

export default notFoundCmp
import React from 'react'
import styles from './styles/slider.module.css'
import Redesign from './Redesign/Redesign'
import Box from './Box'
const Slider = () => {
  return (
    <main>
      <section>
        <div className={styles.container}>
          <div className={styles.slider}>
            <Box mainStyle="box1-box" title="Interior Design" description="You can seek through the new and modern interior designs. Be
          inspired to change your home interior into a beautiful
          comfortable place." buttonStyle="box1-button" />
            <Box mainStyle="box5-box" title="Smart Home Technology" description="Home Automation is the best thing in 2020. Connecting all of
                  your appliances to your smartphone is an obvious plus – it
                  means that you can run your laundry while you’re at work, or
                  save money on your energy bill by optimizing your heating to
                  only be on when you’re home (and maybe 15 minutes either
                  side)." buttonStyle="box5-button" />
          </div>
        </div>
      </section>
      <Redesign />
    </main>
  )
}
export default Slider
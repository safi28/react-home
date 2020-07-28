import React from "react";
import styles from "../styles/redesign.module.css";
import RedesignLabel from './Redesign-Label'
const Redesign = () => {
  return (
    <section id={styles["why-redesign"]}>
      <h1>Why redesign and automate your home?</h1>
      <RedesignLabel
        name="Flexibility"
        description="Being able to integrate these newcomers seamlessly will make your job
          as a homeowner much easier, and allow you to keep upgrading to the
          latest lifestyle technology."
      />
      <RedesignLabel
        name="Maximizing home security"
        description="Home Automation systems can connect motion detectors, surveillance
        cameras, automated door locks, and other tangible security measures
        throughout your home so you can activate them from one mobile device
        before heading to bed."
      />
      <RedesignLabel
        name="Remote control of home functions"
        description="Don’t underestimate the power of being able to control your home’s
        functions from a distance. On an exceptionally hot day, you can order
        your house to become cooler in just enough time before you get home
        from work."
      />
    </section>
  );
};

export default Redesign;

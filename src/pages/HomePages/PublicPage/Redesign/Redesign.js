import React from "react";
import styles from "../styles/redesign.module.css";
import RedesignLabel from "./Redesign-Label";
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
        name="Beautiful and comfortable"
        description="Your home interior design based on your taste is a home with a story of who you are. 
        Make the best possible use of the available space and make it significant."
      />
      <RedesignLabel
        name="Maximizing home security"
        description="Home Automation systems can connect motion detectors, surveillance
        cameras, automated door locks, and other security measures
        throughout your home so you can activate them from one mobile device
        before heading to bed."
      />
    </section>
  );
};

export default Redesign;
import React from "react";
import styles from "./styles/BubbleAnimation.module.css";
import Navigation from "./Navigation";
import { TypewriterEffectSmoothDemo } from "./TypeWriterEffectSmoothDemo";
function Landing() {
  return (
    <div>
      <Navigation />
      <div className={styles.bubbles}>
        {/* Create multiple bubble elements */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className={styles.bubble}></div>
        ))}
      </div>
      <TypewriterEffectSmoothDemo />
      <p className="ml-11 mt-10 text-gray-500">All rights reserved © PICT Robotics.</p>
    </div>
  );
}

export default Landing;

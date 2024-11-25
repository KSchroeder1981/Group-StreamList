import React from "react";
import styles from "../styles/About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>About StreamList</h1>
      <p>
        StreamList is your ultimate platform for managing your favorite movies
        and TV shows. We help you organize, discover, and enjoy entertainment
        effortlessly.
      </p>
      <img
        src="https://via.placeholder.com/400x200"
        alt="StreamList concept"
        className={styles.image}
      />
    </div>
  );
};

export default About;

import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, WeBlog here!</b> Discover people's stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p2.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Welcome to our sleek WeBlog app! Where writing meets simplicity and sharing becomes effortless. </h1>
          <p className={styles.postDesc}>
          In a world inundated with complexities, sometimes, all we crave is simplicity.
          That's precisely what our sleek weblog app offers—a minimalist yet powerful platform designed to amplify your voice without unnecessary fuss.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

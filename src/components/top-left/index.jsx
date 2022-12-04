import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './top-left.module.css';

export default function TopLeft() {
  return (
    <div className={styles.topLeft}>
      <div className={styles.title}>
        Hey, I&apos;m David.
      </div>
      <div className={styles.subtitle}>
        I plan to graduate from Northeastern University in 2023 with a BS in
        computer science and math.
      </div>
      <div className={styles.item}>
        <StaticImage
          src="../../images/gmail.png"
          alt="Email"
          width={30}
        />
        <a
          href="dstephenson1101@gmail.com"
          className={styles.text}
          target="_blank"
          rel="noopener noreferrer"
        >
          dstephenson1101@gmail.com
        </a>
      </div>
      <div className={styles.item}>
        <StaticImage
          src="../../images/github.png"
          alt="GitHub"
          width={30}
        />
        <a
          href="https://github.com/stephensond"
          className={styles.text}
          target="_blank"
          rel="noopener noreferrer"
        >
          stephensond
        </a>
      </div>
      <div className={styles.item}>
        <StaticImage
          src="../../images/linkedin.png"
          alt="Linkedin"
          width={30}
        />
        <a
          href="https://www.linkedin.com/in/stephensond1/"
          className={styles.text}
          target="_blank"
          rel="noopener noreferrer"
        >
          David Stephenson
        </a>
      </div>
    </div>
  );
}

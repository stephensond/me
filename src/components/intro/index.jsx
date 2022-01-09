import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './intro.module.css';

export default function Intro() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Hey, I’m David.
      </div>
      <div className={styles.subtitle}>
        I expect to graduate from Northeastern next year with a BS in
        computer science and math. I am an aspiring software developer.
      </div>
      <div className={styles.item}>
        <StaticImage
          src="../../images/gmail.png"
          alt="Email"
          width={30}
        />
        <a
          href="mailto:dstephenson1101@gmail.com"
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

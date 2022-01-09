import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './profile.module.css';

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <StaticImage
          src="../../images/profile.jpg"
          alt="Profile"
          aspectRatio={1}
        />
      </div>
      <div className={styles.contact}>
        <div className={styles.item}>
          David Stephenson
        </div>
      </div>
    </div>
  );
}

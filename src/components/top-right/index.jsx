import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './top-right.module.css';

export default function TopRight() {
  return (
    <div className={styles.topRight}>
      <div>
        <StaticImage
          src="../../images/profile-new.jpg"
          alt="Profile"
          aspectRatio={1}
        />
      </div>
    </div>
  );
}

import React from 'react';
import TopLeft from '../top-left';
import TopRight from '../top-right';
import * as styles from './top.module.css';

export default function Top() {
  return (
    <div className={styles.container}>
      <div className={styles.topLeftWrapper}>
        <TopLeft />
      </div>
      <div className={styles.topRightWrapper}>
        <TopRight />
      </div>
    </div>
  );
}

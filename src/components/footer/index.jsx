import React from 'react';
import * as styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      Built with
      {' '}
      <a
        href="https://www.gatsbyjs.com/"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
      {' '}
      and
      {' '}
      <a
        href="https://reactjs.org/"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        React
      </a>
      .
    </div>
  );
}

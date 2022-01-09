import React from 'react';
import Interests from '../components/interests';
import Intro from '../components/intro';
import Profile from '../components/profile';
import * as styles from './index.module.css';

function HomePage() {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.intro}>
          <Intro />
        </div>
        <div className={styles.profile}>
          <Profile />
        </div>
      </div>
      <div className={styles.bodyHeader}>
        While I like writing code, it&apos;s really important to me to
        maintain balance in my life and also make time for other things I enjoy.
        So on that note, here are some other things that I find interesting!
      </div>
      <div className={styles.interests}>
        <Interests />
      </div>
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
    </div>
  );
}

export default HomePage;

import React from 'react';
import Top from '../components/top';
import Interests from '../components/interests';
import Footer from '../components/footer';
import * as styles from './index.module.css';

function HomePage() {
  return (
    <div>
      <div className={styles.section}>
        <Top />
      </div>
      <div className={styles.section}>
        <Interests />
      </div>
      <div className={styles.section}>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;

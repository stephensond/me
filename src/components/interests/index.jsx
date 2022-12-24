import React, { useState } from 'react';
import * as styles from './interests.module.css';
import Sports from '../content/sports';
import Covid from '../content/covid';
import Running from '../content/running';
import Elections from '../content/elections';
import Survivor from '../content/survivor';

const TOPICS = {
  SPORTS: 'Sports',
  ELECTIONS: 'Elections',
  COVID: 'COVID',
  RUNNING: 'Running',
  SURVIVOR: 'Survivor',
};

export default function Interests() {
  const [topic, setTopic] = useState(TOPICS.SPORTS);

  const getStyle = (item) => `${styles.item} ${topic === item ? styles.selected : ''}`;

  const getContent = () => {
    switch (topic) {
      case TOPICS.SPORTS: return <Sports />;
      case TOPICS.COVID: return <Covid />;
      case TOPICS.RUNNING: return <Running />;
      case TOPICS.ELECTIONS: return <Elections />;
      case TOPICS.SURVIVOR: return <Survivor />;
      default: return '';
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.bodyHeader}>
        Here are some things I find interesting!
      </div>
      <div className={styles.container}>
        <div className={styles.topics}>
          {Object.values(TOPICS).map((val) => (
            <button
              type="button"
              onClick={() => setTopic(val)}
              className={getStyle(val)}
            >
              {val}
            </button>
          ))}
        </div>
        {getContent()}
      </div>
    </div>
  );
}

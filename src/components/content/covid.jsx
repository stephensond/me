import React from 'react'
import * as styles from './content.module.css'

export default function Covid() {
  return (
    <div className={styles.content}>
      <p>
        Since the pandemic began in March 2020, I have really enjoyed
        following various pieces of COVID data from different countries.
        As an example of random data that I like to sift through, during the Omicron wave I&apos;ve
        been looking at trends in hospital admissions and deaths in South Africa to try to get an
        estimate of the relative severity of the Omicron variant.
        {' '}
        <a
          href="https://www.nicd.ac.za/diseases-a-z-index/disease-index-covid-19/surveillance-reports/daily-hospital-surveillance-datcov-report/"
          className={styles.site}
          target="_blank"
          rel="noopener noreferrer"
        >
          (link here)
        </a>
      </p>
      <p>
        It&apos;s helped me unexpectedly become really interested in and
        learn a lot about how viruses spread and attack our bodies,
        how our immune systems work to fight off viruses, and
        how vaccines work to provide different defense mechanisms against
        getting really sick.
      </p>
      <p> Here are some Twitter accounts that I&apos;ve enjoyed following:</p>
      <ul className={styles.links}>
        <li>
          <a
            href="https://twitter.com/jburnmurdoch"
            className={styles.site}
            target="_blank"
            rel="noopener noreferrer"
          >
            @jburnmurdoch
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/sailorrooscout"
            className={styles.site}
            target="_blank"
            rel="noopener noreferrer"
          >
            @sailorrooscout
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/trvrb"
            className={styles.site}
            target="_blank"
            rel="noopener noreferrer"
          >
            @trvrb
          </a>
        </li>
      </ul>
    </div>
  );
}

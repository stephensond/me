import React from 'react'
import * as styles from './content.module.css'

export default function Elections() {
  return (
    <div className={styles.content}>
      <p>
        I also love following US elections. From the reapportionment and
        redistricting process to draw new congressional distrcicts, to polling data
        in the leadup to primaries and general elections, to analyzing results
        on election night, I really enjoy keeping track of all of the data
        that an election cycle provides. Some of my favorite sources of election
        information are:
      </p>
      <ul className={styles.links}>
        <li>
          <a
            href="https://twitter.com/Redistrict"
            className={styles.site}
            target="_blank"
            rel="noopener noreferrer"
          >
            @Redistrict on Twitter
          </a>
          : who provides great coverage of redistricting and election night data
        </li>
        <li>
          <a
            href="https://fivethirtyeight.com/"
            className={styles.site}
            target="_blank"
            rel="noopener noreferrer"
          >
            FiveThirtyEight
          </a>
          : which has polling averages and creates cool models to try to predict
          election results based on polling and other factors
        </li>
      </ul>
    </div>
  );
}

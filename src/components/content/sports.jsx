import React from 'react'
import * as styles from './content.module.css'

export default function Sports() {
  return (
    <div className={styles.content}>
      <p>
        I absolutely love watching and following sports. Most of the time
        I&apos;m following football and basketball, but I keep up with everything
        from Wimbledon to the World Cup.
      </p>
      <p>
        Over the last few years, I&apos;ve gotten more into fantasy football.
        I find it a really cool way to get to know and root for individual players, and it makes watching 
        NFL regular season games that don&apos;t involve your favorite team a lot more interesting.
      </p>
      <p>
        During the winter, college basketball is what occupies most of my sports interest.
        It&apos;s such a unique sport in that there are so many teams (363) all playing for the
        same championship, and it undoubtedly has the best postseason tournament in all of
        sports, March Madness. Here are some sites that I visit frequently
        during the college basketball season:
      </p>
      <ul className={styles.links}>
        <li>
          <a
            href="https://www.kenpom.com/"
            className={styles.site}
            target="_blank"
            rel="noopener noreferrer"
          >
            kenpom.com

          </a>
          : a statistical model used to rate teams
        </li>
        <li>
          <a
            href="http://bracketmatrix.com/"
            className={styles.site}
            target="_blank"
            rel="noopener noreferrer"
          >
            The Bracket Matrix

          </a>
          : a site that aggregates March Madness bracket predictions
        </li>
        <li>
          <a
            href="https://www.warrennolan.com/"
            className={styles.site}
            target="_blank"
            rel="noopener noreferrer"
          >
            warrennolan.com

          </a>
          : to get a detailed look at the resumes of different teams
        </li>
      </ul>
    </div>
  );
}

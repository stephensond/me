import React from 'react'
import * as styles from './content.module.css'

export default function Survivor() {
  return (
    <div className={styles.content}>
      <p>
        I don&apos;t watch that many TV shows at all. However, I do love the show Survivor.
        It&apos;s fascinating to watch the complex social dynamics play out in a game
        where people need to vote each other out. When I was younger I really
        wanted to get on the show to take part in the strategic decision-making…
        but nowadays starving and not sleeping for up to 39 days sounds
        less appealing. I&apos;ve watched almost every season, and if you are looking
        for any recommendations, here are some of my favorite seasons:
      </p>
      <ul className={styles.links}>
        <li>Micronesia (Season 16)</li>
        <li>Heroes vs. Villians (Season 20)</li>
        <li>Philippines (Season 25)</li>
        <li>Cagayan (Season 28)</li>
        <li>David vs. Goliath (Season 37)</li>
        <li>Winners at War (Season 40)</li>
      </ul>
    </div>
  );
}

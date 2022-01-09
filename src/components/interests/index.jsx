import React, { useState } from 'react';
import * as styles from './interests.module.css';

const TOPICS = {
  SPORTS: 'Sports',
  COVID: 'COVID',
  RUNNING: 'Running',
  ELECTIONS: 'Elections',
  SURVIVOR: 'Survivor',
};

const SPORTS_CONTENT = (
  <div>
    <p>
      I absolutely love watching and following sports. Most of the time
      I&apos;m following football and basketball, but I keep up with everything
      from Wimbledon to the World Cup.
    </p>
    <p>
      Over the last few fall seaons, I&apos;ve gotten more into fantasy football.
      I find it a really cool way to get to know and root for individual players who are so
      talented and skilled at their position. It makes watching NFL regular season games
      that dont involve your favorite team a lot more interesting. (And since my favorite
      team is the New York Jets, who are consistently horrible, fantasy is pretty
      necessary to keep the season fun). My roomate and I are actually working
      on our own fantasy football draft web app, Modern Fantasy, as a way to
      combine interests in software development and fantasy. (you can check it out on my GitHub)
    </p>
    <p>
      During the winter, college basketball is what occupies most of my sports interest.
      It&apos;s such a unique sport in that there are a lot of teams (358) all playing for the
      same championship, and it undoubtably has the best postseason tournament in all of
      sports, March Madness. Some sites I&apos;m a frequent visitor of from November - March:
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
        : a model developed by Ken Pomeroy that uses data to
        estimate who the strongest teams are
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
        : a site that aggregates
        a lot of March Madness bracket predictions on the internet
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
        : to get a detailed look at the NET rankings, a metric used
        to pick teams for the tournament
      </li>
    </ul>
  </div>
);

const COVID_CONTENT = (
  <div>
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
    <p> Here are some twitter accounts that I&apos;ve enjoyed following:</p>
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

const RUNNING_CONTENT = (
  <div>
    <p>
      One of my favorite hobbies is to run. It&apos;s my favorite way
      to de-stress and get some exercise. There&apos;s nothing like that good
      feeling you get right after finishing a tough training run or
      crossing the finish line of a race.  My family has inspired me to improve at
      running, as my mom is a world-class marathoner and triathlete,
      and my grandparents still participate in road races and
      triathlons at an age where most people are unable to exercise much at all.
    </p>
    <p>
      I most enjoy running longer distances, and my biggest dream is to one day
      finish the Boston Marathon. Though of course, I&apos;m looking forward to
      hopefully traveling to and pariticpating in lots of cool races around the world.
    </p>
  </div>
);

const ELECTIONS_CONTENT = (
  <div>
    <p>
      I also love following US elections. From the reapportionment and
      redistricting process that has been going on over the past year
      to draw new congressional distrcicts, to the polling numbers in the
      leadup to primaries and general elections, to watching the results
      come in on election night, I really enjoy keeping track of all of the data
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

const SURVIVOR_CONTENT = (
  <div>
    <p>
      I don&apos;t watch that many TV shows at all. However, I do love the show Survivor.
      It&apos;s fascinating to watch the complex social dynamics play out in a game
      where people need to vote each other out. When I was younger I really
      wanted to get on the show to take part in the strategic decision-making…
      but nowadays starving and not sleeping much for up to 39 days sounds
      less appealing. I&apos;ve watched almost all 41 seasons, and if you are looking
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

export default function Interests() {
  const [topic, setTopic] = useState(TOPICS.SPORTS);

  const getStyle = (item) => `${styles.item} ${topic === item ? styles.selected : ''}`;

  const getContent = () => {
    switch (topic) {
      case TOPICS.SPORTS: return SPORTS_CONTENT;
      case TOPICS.COVID: return COVID_CONTENT;
      case TOPICS.RUNNING: return RUNNING_CONTENT;
      case TOPICS.ELECTIONS: return ELECTIONS_CONTENT;
      case TOPICS.SURVIVOR: return SURVIVOR_CONTENT;
      default: return '';
    }
  };

  return (
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
      <div className={styles.content}>
        {getContent()}
      </div>

    </div>
  );
}

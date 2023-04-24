import styles from './intro.module.scss';

export const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.introContainer}>
        <div className={styles.colOne}>
          <img alt="two friendly cats" src="/Cat-friend-1.png" />
        </div>
        <div className={styles.colTwo}>
          <h2 className={styles.heading}>Where cats come to Play and Stay</h2>
          <p>
            At The Cat’s Meow, we understand that your cats are more than just
            pets – they are family. That’s why we provide the highest quality
            care and attention for our four-legged guests in a safe and
            luxurious setting. Our resort is uniquely designed to provide
            enrichment and stimulation in a natural environment, with spacious
            suites, interactive toys, and plenty of fresh air.
          </p>
          <button className={styles.button}>Book Meow</button>
        </div>
      </div>
    </div>
  );
};

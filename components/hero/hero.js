import styles from './hero.module.scss';

export const Hero = ({}) => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroHeading}>Cat's Meow Resort</h1>
      <img src="/Hero-img-1.png" className={styles.heroImg} />
      <img src="/Hero-img-mobile-1.png" className={styles.heroImgMobile} />
    </div>
  );
};

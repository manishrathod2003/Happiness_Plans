import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Your Journey to Joy Starts Here</h1>
        <p>
          Discover personalized happiness strategies and build meaningful connections that transform
          your life from ordinary to extraordinary.
        </p>
        <a href="#services" className={styles.ctaButton}>
          Start Your Journey
        </a>
      </div>
    </section>
  );
};

export default Hero;

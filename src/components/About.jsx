import React from 'react';
import styles from '../styles/About.module.css';
import aboutImage from '../assets/images/about.jpg'; // ya tumne diya `df2b6da3...png`

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.textContainer}>
        <h2>About Happiness Plans</h2>
       <p>
        Planning your dream vacation or a memorable event? 
        </p>
        <p>
        We’ve got you covered! We specialize in
        <strong> customized travel planning </strong> and <strong> professional event management</strong>, 
        taking care of every detail—from booking flights and accommodations to curating unforgettable experiences.
      </p>
      <p>
        Whether it’s a <strong>corporate retreat</strong>, a <strong>destination wedding</strong>, or a
        <strong> family holiday</strong>, our expert team ensures everything runs smoothly, stress-free, and tailored just for you.
      </p>
      <p>
        ✨ Let us turn your vision into reality—travel smart, celebrate grand!
      </p>
      <p>
        📞 <strong>Contact us today</strong> and start your next adventure with confidence!
      </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={aboutImage} alt="Happiness Plans Logo" className={styles.aboutImage} />
      </div>
    </section>
  );
};

export default About;

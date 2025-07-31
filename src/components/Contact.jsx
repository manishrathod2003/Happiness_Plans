import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Ready to Begin Your Happiness Journey?</h3>
            <p>
              We're here to support you every step of the way. Reach out to learn more about our
              services or schedule a complimentary consultation.
            </p>
            <div className={styles.details}>
              <p><strong>📧 Email:</strong> hello@happinessplans.com</p>
              <p><strong>📞 Phone:</strong> 9109135533, 9109135530</p>
              <p><strong>🏢 Office:</strong> 408, Apollo Premiere, Vijay Nagar, Indore, India 452011</p>
              <p><strong>⏰ Hours:</strong> Mon-Fri 9AM-6PM, Sat 10AM-4PM</p>
            </div>
          </div>
          <form className={styles.form} onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for contacting us! We'll get back to you soon 😊");
            e.target.reset();
          }}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="service">Service Interest</label>
              <select id="service" name="service">
                <option value="">Select a service...</option>
                <option value="happiness-plan">Personalized Happiness Plan</option>
                <option value="wellness-coaching">Wellness Coaching</option>
                <option value="support-groups">Community Support</option>
                <option value="digital-tools">Digital Wellness Tools</option>
                <option value="workshops">Workshops & Seminars</option>
                <option value="achievement-coaching">Achievement Coaching</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows="4" required />
            </div>
            <button type="submit" className={styles.submitBtn}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import styles from '../styles/Services.module.css';

const services = [
  {
    icon: '🧳',
    title: 'Tailored Travel Planning',
    desc: 'We handle everything—from flights and hotels to day tours and hidden‑gem activities—crafted to match your budget, interests, and vibe.',
  },
  {
    icon: '✨',
    title: 'High‑Touch Event Management',
    desc: 'We organize corporate retreats, weddings, anniversaries, and celebrations with attention to detail—from venue and décor to entertainment and guest experience.',
  },
  {
    icon: '🌐',
    title: 'Destination Expertise',
    desc: 'As your trusted local partner, we arrange logistics like ground transport, guided tours, event venues, and curated experiences in key destinations.',
  },
  {
    icon: '🏛️',
    title: 'Corporate & Group Travel',
    desc: 'We optimize group travel, meetings, and incentive events by bundling travel, lodging, team excursions, and event spaces—all hassle‑free.',
  },
  {
    icon: '🤝',
    title: 'Concierge‑Level Support',
    desc: 'Our team handles changes, surprises, delays, and extra requests with full-service care, just like boutique “travel designers” do. ',
  },
  {
    icon: '🎯',
    title: 'Personalized Itineraries & Perks',
    desc: 'Expect upgrades, tailored schedules, local collaborations, and surprising touches that go beyond typical tour packages. ',
  },
];

const Services = () => (
  <section id="services" className={styles.services}>
    <div className={styles.container}>
      <h2 className={styles.heading}>What We Do</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, idx) => (
          <div key={idx} className={styles.card}>
            <span className={styles.icon}>{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

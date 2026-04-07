import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote:
      '"Nexus completely transformed how our team ships products. We cut our deployment time in half within the first month."',
    name: 'Sarah Chen',
    role: 'CTO at Streamline',
    avatar: 'SC'
  },
  {
    quote:
      '"The AI features alone are worth the price. It\'s like having a senior engineer working alongside every team member 24/7."',
    name: 'Marcus Rivera',
    role: 'VP Engineering at Orbit',
    avatar: 'MR'
  },
  {
    quote:
      '"We evaluated 12 platforms before choosing Nexus. Best decision we\'ve made — the integrations and reliability are unmatched."',
    name: 'Priya Nair',
    role: 'Head of Product at Zenith',
    avatar: 'PN'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Testimonials</span>
          <h2 className={styles.title}>Loved by teams worldwide</h2>
          <p className={styles.subtitle}>
            Don't take our word for it — hear from the teams who build
            with Nexus every day.
          </p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>
      <div className={styles.container}>
        <div className={styles.badge}>🚀 Now with AI-powered features</div>
        <h1 className={styles.title}>
          Build the future,
          <br />
          <span className={styles.gradient}>faster than ever</span>
        </h1>
        <p className={styles.subtitle}>
          Nexus empowers teams to design, build, and ship extraordinary
          digital experiences with the tools they love and the speed
          they need.
        </p>
        <div className={styles.actions}>
          <a href="#features" className={styles.primaryBtn}>
            Explore Features
          </a>
          <a href="#testimonials" className={styles.secondaryBtn}>
            See Success Stories
          </a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>50K+</span>
            <span className={styles.statLabel}>Active Users</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>99.9%</span>
            <span className={styles.statLabel}>Uptime</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>4.9★</span>
            <span className={styles.statLabel}>Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import styles from './Features.module.css';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description:
      'Optimized for performance at every layer. Sub-second load times and smooth interactions keep your users engaged.'
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption, SSO support, and advanced permission controls keep your data safe at all times.'
  },
  {
    icon: '🤖',
    title: 'AI-Powered',
    description:
      'Intelligent automation and smart suggestions powered by cutting-edge machine learning models built right in.'
  },
  {
    icon: '🌐',
    title: 'Global Scale',
    description:
      'Deploy to 30+ edge locations worldwide. Your product is always fast and available, no matter where users are.'
  },
  {
    icon: '🔗',
    title: 'Seamless Integrations',
    description:
      'Connect with 200+ tools and services your team already uses — from Slack to Salesforce with zero friction.'
  },
  {
    icon: '📊',
    title: 'Real-time Analytics',
    description:
      'Beautiful dashboards and deep insights that help you understand your users and make data-driven decisions.'
  }
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Features</span>
          <h2 className={styles.title}>Everything you need to succeed</h2>
          <p className={styles.subtitle}>
            A complete platform designed to help your team move faster,
            collaborate better, and ship higher-quality products.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

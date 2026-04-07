import styles from './Footer.module.css';

const links = [
  {
    heading: 'Product',
    items: ['Features', 'Pricing', 'Changelog', 'Roadmap']
  },
  {
    heading: 'Company',
    items: ['About', 'Blog', 'Careers', 'Press']
  },
  {
    heading: 'Support',
    items: ['Documentation', 'Community', 'Status', 'Contact']
  }
];

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <span className={styles.logoIcon}>✦</span>
              <span>Nexus</span>
            </a>
            <p className={styles.tagline}>
              The platform for modern product teams to build, collaborate,
              and ship at scale.
            </p>
            <div className={styles.social}>
              {['𝕏', 'in', 'gh'].map((s) => (
                <a key={s} href="#" className={styles.socialBtn}>
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.links}>
            {links.map((group) => (
              <div key={group.heading} className={styles.group}>
                <h4 className={styles.groupHeading}>{group.heading}</h4>
                <ul className={styles.groupList}>
                  {group.items.map((item) => (
                    <li key={item}>
                      <a href="#" className={styles.groupLink}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} Nexus. All rights reserved.
          </span>
          <div className={styles.legal}>
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a key={item} href="#" className={styles.legalLink}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

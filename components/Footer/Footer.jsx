import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Platform Logo" />
          <h1>Platform Name</h1>
        </div>
        <div className={styles.links}>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Campaigns</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h2>Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>
          &copy; {new Date().getFullYear()} Platform Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

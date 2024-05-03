import Link from "next/link";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div>
        <ul className={styles["sidebar-list"]}>
          <li className={styles["sidebar-list-item"]}>
            <Link className={styles["sidebar-link"]} href="/">
              Home
            </Link>
          </li>
          <li className={styles["sidebar-list-item"]}>
            <Link className={styles["sidebar-link"]} href="/dashboard/students">
              Students
            </Link>
          </li>
          <li className={styles["sidebar-list-item"]}>
            <Link className={styles["sidebar-link"]} href="/dashboard/mentors">
              Mentors
            </Link>
          </li>
          <li className={styles["sidebar-list-item"]}>
            <Link
              className={styles["sidebar-link"]}
              href="/dashboard/campaigns"
            >
              Manage Campaigns
            </Link>
          </li>
          <li className={styles["sidebar-list-item"]}>
            <Link
              className={styles["sidebar-link"]}
              href="/dashboard/campaign-access"
            >
              Campaign Access
            </Link>
          </li>
          <li className={styles["sidebar-list-item"]}>
            <Link
              className={styles["sidebar-link"]}
              href="/dashboard/campaign-access"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;

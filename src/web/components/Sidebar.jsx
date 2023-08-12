// Imports
import Link from "next/link";

import styles from "@/web/styles/Sidebar.module.css";
import HeadPage from "./HeadPage";
import Main from "./Main";

// Sidebar function
const Sidebar = () => {
  return (
    <>
      <HeadPage />
      <Main>
        <div className={styles.sidebarContainer}>
          <div className={styles.linksContainer}>
            <div className={styles.partName}>Category</div>
            <ul>
              <Link className="" href="/all-items">
                <li className={styles.sidebarLi}>
                  All items
                </li>
              </Link>
              <Link className="" href="/passwords">
                <li className={styles.sidebarLi}>
                  Passwords
                </li>
              </Link>
              <Link className="" href="/credit-cards">
                <li className={styles.sidebarLi}>
                  Credit Cards
                </li>
              </Link>
              <Link className="" href="/personal-info">
                <li className={styles.sidebarLi}>
                  Personal Info
                </li>
              </Link>
              <Link className="" href="/secure-notes">
                <li className={styles.sidebarLi}>
                  Secure Notes
                </li>
              </Link>
            </ul>
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.partName}>Tools</div>
            <ul>
              <Link href="/password-generator">
                <li className={styles.sidebarLi}>
                  Password Generator
                </li>
              </Link>
              <Link href="/password-strength-checker">
                <li className={styles.sidebarLi}>
                  Password Strength Checker
                </li>
              </Link>
              <Link href="/password-health">
                <li className={styles.sidebarLi}>
                  Password Health
                </li>
              </Link>
            </ul>
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.partName}>Vaults</div>
            <ul>
              <Link href="/">
                <li className={styles.sidebarLi}>
                  Vault
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Sidebar;

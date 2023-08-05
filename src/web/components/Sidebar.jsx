// Imports
import Image from "next/image";
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
            <ul>
              <Link className="" href="/home-page">
                <li className={styles.sidebarLi}>
                  Home
                </li>
              </Link>
              <Link className="" href="/">
                <li className={styles.sidebarLi}>
                  Add new account
                </li>
              </Link>
            </ul>
          </div>
          <div className={styles.linksContainer}>
            <ul>
              <Link href="/">
                <li className={styles.sidebarLi}>
                  Vault
                </li>
              </Link>
            </ul>
          </div>
          <div className={styles.linksContainer}>
            <ul>
              <Link href="/">
                <li className={styles.sidebarLi}>
                  Password Generator
                </li>
              </Link>
              <Link href="/">
                <li className={styles.sidebarLi}>
                  Password Strength Checker
                </li>
              </Link>
              <Link href="/">
                <li className={styles.sidebarLi}>
                  Vulnerable passwords
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

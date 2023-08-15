// Imports
import Link from "next/link";
import Image from "next/image";

import styles from "@/web/styles/Sidebar.module.css";
import HeadPage from "./HeadPage";
import Main from "./Main";
import ThemeSwitchButton from "./ThemeSwitchButton";

// Sidebar function
const Sidebar = () => {
  return (
    <>
      <HeadPage />
      <Main>
        <div className={styles.sidebarContainer}>
          <div className={styles.linksContainer}>
            <ThemeSwitchButton />
            <br />
            <br />
            <div className={styles.partName}>Category</div>
            <ul>
              <Link className="" href="/all-items">
                <li className={styles.sidebarLi}>
                <Image src="/all-items.svg" alt="" width={20} height={10} className={styles.icon} />All items
                </li>
              </Link>
              <Link className="" href="/passwords">
                <li className={styles.sidebarLi}>
                <Image src="/password-light.svg" alt="" width={20} height={10} className={styles.icon} />Passwords
                </li>
              </Link>
              <Link className="" href="/credit-cards">
                <li className={styles.sidebarLi}>
                <Image src="/credit-card-light.svg" alt="" width={20} height={10} className={styles.icon} />Credit Cards
                </li>
              </Link>
              <Link className="" href="/personal-info">
                <li className={styles.sidebarLi}>
                <Image src="/personal-info-light.svg" alt="" width={20} height={10} className={styles.icon} />Personal Info
                </li>
              </Link>
              <Link className="" href="/secure-notes">
                <li className={styles.sidebarLi}>
                <Image src="/secure-note.svg" alt="" width={20} height={10} className={styles.icon} />Secure Notes
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

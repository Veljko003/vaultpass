// Imports
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "@/web/styles/Sidebar.module.css";
import HeadPage from "./HeadPage";
import Main from "./Main";
import ThemeSwitchButton from "./ThemeSwitchButton";

// Sidebar function
const Sidebar = () => {
  const [vaults, setVaults] = useState([]);

  const addVault = () => {
    const newVaults = [...vaults, { name: `Vault ${vaults.length + 1}` }];
    setVaults(newVaults);
  };
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
                  <Image
                    src="/all-items.svg"
                    alt=""
                    width={20}
                    height={10}
                    className={styles.icon}
                  />
                  All items
                </li>
              </Link>
              <Link className="" href="/passwords">
                <li className={styles.sidebarLi}>
                  <Image
                    src="/password.svg"
                    alt=""
                    width={20}
                    height={10}
                    className={styles.icon}
                  />
                  Passwords
                </li>
              </Link>
              <Link className="" href="/credit-cards">
                <li className={styles.sidebarLi}>
                  <Image
                    src="/credit-card.svg"
                    alt=""
                    width={20}
                    height={10}
                    className={styles.icon}
                  />
                  Credit Cards
                </li>
              </Link>
              <Link className="" href="/personal-info">
                <li className={styles.sidebarLi}>
                  <Image
                    src="/personal-info.svg"
                    alt=""
                    width={20}
                    height={10}
                    className={styles.icon}
                  />
                  Personal Info
                </li>
              </Link>
              <Link className="" href="/secure-notes">
                <li className={styles.sidebarLi}>
                  <Image
                    src="/secure-note.svg"
                    alt=""
                    width={20}
                    height={10}
                    className={styles.icon}
                  />
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
                  <Image
                    src="/password-generator.svg"
                    alt=""
                    width={20}
                    height={10}
                    className={styles.icon}
                  />
                  Password Generator
                </li>
              </Link>
              <Link href="/password-strength-checker">
                <li className={styles.sidebarLi}>
                  <Image
                    src="/password-strength-checker.svg"
                    alt=""
                    width={20}
                    height={10}
                    className={styles.icon}
                  />
                  Password Strength Checker
                </li>
              </Link>
              <Link href="/password-health">
                <li className={styles.sidebarLi}>
                  <Image
                    src="/password-health.svg"
                    alt=""
                    width={20}
                    height={10}
                    className={styles.icon}
                  />
                  Password Health
                </li>
              </Link>
            </ul>
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.partName}>
              Vaults{" "}
              <button onClick={addVault}>
                <Image
                  src="/add-folder.svg"
                  alt=""
                  width={20}
                  height={10}
                  className={styles.addFolder}
                />
              </button>
            </div>
            <ul>
              {vaults.map((vault, index) => (
                <Link key={index} href="/">
                  <li className={styles.sidebarLi}>
                    <Image
                      src="/folder.svg"
                      alt=""
                      width={20}
                      height={10}
                      className={styles.icon}
                    />
                    {vault.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Sidebar;

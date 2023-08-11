// Imports
import React, { useState } from "react";
import Link from "next/link"

import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Footer from "@/web/components/Footer";
import Sidebar from "@/web/components/Sidebar";
import ThemeSwitchButton from "@/web/components/ThemeSwitchButton";
import Button from "@/web/components/Button";
import styles from "@/web/styles/Home.module.css";

// AllItems function
const AllItems = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <HeadPage />
      <Main>
        <ThemeSwitchButton />
        <Sidebar />
        <br />
        <Button onClick={toggleDropdown} btnLabel="Add item" />
        {isDropdownVisible && (
          <div className={`${styles.dropdown} ${styles.visible}`}>
            <Link href="/formPages/passwordForm"><span className={styles.item}>Password</span></Link><br /><br />
            <Link href="/formPages/creditCardForm"><span className={styles.item}>Credit Card</span></Link><br /><br />
            <Link href="/formPages/secureNoteForm"><span className={styles.item}>Secure Note</span></Link><br /><br />
            <Link href="/formPages/personalInfoForm"><span className={styles.item}>Personal Info</span></Link>
          </div>
        )}
      </Main>
      <Footer />
    </>
  );
};

export default AllItems;

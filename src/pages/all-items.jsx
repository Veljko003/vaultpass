// Imports
import React, { useState } from "react";
import Link from "next/link"
import Image from "next/image"

import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Sidebar from "@/web/components/Sidebar";
import Button from "@/web/components/Button";
import styles from "@/web/styles/Home.module.css";
import ListContainer from "@/web/components/ListContainer";

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
        <Sidebar />
        <br />
        <Button onClick={toggleDropdown} btnLabel="Add item" />
        {isDropdownVisible && (
          <div className={`${styles.dropdown} ${styles.visible}`}>
            <Link href="/formPages/passwordForm"><span className={styles.item}><Image src="/password.svg" alt="" width={20} height={10} className={styles.icon} />Password</span></Link><br /><br />
            <Link href="/formPages/creditCardForm"><span className={styles.item}><Image src="/credit-card.svg" alt="" width={20} height={10} className={styles.icon} />Credit Card</span></Link><br /><br />
            <Link href="/formPages/secureNoteForm"><span className={styles.item}><Image src="/secure-note.svg" alt="" width={20} height={10} className={styles.icon} />Secure Note</span></Link><br /><br />
            <Link href="/formPages/personalInfoForm"><span className={styles.item}><Image src="/personal-info.svg" alt="" width={20} height={10} className={styles.icon} />Personal Info</span></Link>
          </div>
        )}
        <ListContainer>
        </ListContainer>
      </Main>
    </>
  );
};

export default AllItems;

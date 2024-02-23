// Imports
import React, { useState } from "react";
import zxcvbn from "zxcvbn";

import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Sidebar from "@/web/components/ui/Sidebar";
import styles from "@/web/styles/Tools.module.css";

// PasswordStrengthChecker function
const PasswordStrengthChecker = () => {
  const [type, setType] = useState("input");
  const [score, setScore] = useState("null");

  const showHide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let currentType = type === "input" ? "password" : "input";
    setType(currentType);
  };

  const testStrengthPassword = (e) => {
    // we will get score property from zxcvbn
    if (e.target.value !== "") {
      let pass = zxcvbn(e.target.value);
      setScore(pass.score);
    } else {
      setScore("null");
    }
  };
  return (
    <>
      <HeadPage />
      <Main>
        <Sidebar />
        <div className={styles.container}>
          <label className={styles.labelPassword}>
            Password
            <input
              type={type}
              className={styles.inputPassword}
              onChange={testStrengthPassword}
            />
            <span className={styles.showPassword} onClick={showHide}>
              {type === "input" ? "Hide" : "Show"}
            </span>
            <span className={styles.strengthPassword} data-score={score} />
          </label>
        </div>
      </Main>
    </>
  );
};

export default PasswordStrengthChecker;

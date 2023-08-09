// Imports
import React, { useState } from "react";

import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Footer from "@/web/components/Footer";
import Sidebar from "@/web/components/Sidebar";
import Title from "@/web/components/Title";
import Button from "@/web/components/Button";
import styles from "@/web/styles/Tools.module.css";
import ThemeSwitchButton from "@/web/components/ThemeSwitchButton";

// PasswordGenerator function
const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_+=<>?";

    let allowedChars = "";
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      generatedPassword += allowedChars[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const handleCopyClick = () => {
    const textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Password copied to clipboard!");
  };

  return (
    <>
      <HeadPage />
      <Main>
        <Sidebar />
        <ThemeSwitchButton />
        <Title titleLabel="Password Generator" />
        <br />
        <br />
        <div className={styles.passwordContainer}>
          <p className={styles.password}>{password}</p>
        </div>
        <div className={styles.passwordGenerator}>
          <div className={styles.row}>
            <label>Password Length:</label>
            <input
              type="range"
              min="4"
              max="20"
              value={passwordLength}
              className={styles.slider}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
            <span className={styles.passwordLength}>{passwordLength}</span>{" "}
            {/* Display selected value */}
          </div>
          <div className={styles.row}>
            <label>Include Uppercase Letters</label>
            <input
              type="checkbox"
              checked={includeUppercase}
              className={styles.checkbox}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
          </div>
          <div className={styles.row}>
            <label>Include Lowercase Letters</label>
            <input
              type="checkbox"
              checked={includeLowercase}
              className={styles.checkbox}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
          </div>
          <div className={styles.row}>
            <label>Include Numbers</label>
            <input
              type="checkbox"
              checked={includeNumbers}
              className={styles.checkbox}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
          </div>
          <div className={styles.row}>
            <label>Include Symbols</label>
            <input
              type="checkbox"
              checked={includeSymbols}
              className={styles.checkbox}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
          </div>
          <Button onClick={generatePassword} btnLabel="Generate Password" />
          <br />
          <br />
          {password && (
            <div>
              <Button onClick={handleCopyClick} btnLabel="Copy Password" />
            </div>
          )}
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default PasswordGenerator;

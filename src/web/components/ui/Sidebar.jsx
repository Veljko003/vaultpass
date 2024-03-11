// Imports
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import styles from "@/web/styles/Sidebar.module.css"
import HeadPage from "../HeadPage"
import Main from "../Main"
import ThemeSwitchButton from "./ThemeSwitchButton"
import Button from "@/web/components/ui/buttons/Button"
import { useSession } from "@/web/components/SessionContext"

// Sidebar function
const Sidebar = () => {
  const [vaults, setVaults] = useState([])
  const [renamingIndex, setRenamingIndex] = useState(null)
  const [newVaultName, setNewVaultName] = useState("")
  const { signOut } = useSession()

  // --- VAULT FUNCTIONS

  // Add Vault (Folder)
  const addVault = () => {
    const newVaults = [...vaults, { name: `Vault ${vaults.length + 1}` }]
    setVaults(newVaults)
  }

  // Delete Vault (Folder)
  const deleteVault = (index) => {
    const updatedVaults = vaults.filter((_, idx) => idx !== index)
    setVaults(updatedVaults)
  }

  // Rename Vault (Folder)
  const renameVault = (index, newName) => {
    const updatedVaults = [...vaults]
    updatedVaults[index].name = newName
    setVaults(updatedVaults)
    setRenamingIndex(null)
    setNewVaultName("") // Reset new name
  }

  // ---

  return (
    <>
      <HeadPage />
      <Main>
        <div className={styles.sidebarContainer}>
          <div className={styles.linksContainer}>
            <ThemeSwitchButton />
            <Button btnLabel="Sign out" onClick={signOut} />
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
              <Link className="" href="/categories/passwords">
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
              <Link className="" href="/categories/credit-cards">
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
              <Link className="" href="/categories/personal-info">
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
              <Link className="" href="/categories/secure-notes">
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
              <Link href="/tools/password-generator">
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
              <Link href="/tools/password-strength-checker">
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
              <Link href="/tools/password-health">
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
                <li className={styles.sidebarLi} key={index}>
                  <Image
                    src="/folder.svg"
                    alt=""
                    width={20}
                    height={10}
                    className={styles.icon}
                  />
                  {renamingIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={newVaultName}
                        onChange={(e) => setNewVaultName(e.target.value)}
                        style={{ color: "black" }}
                      />
                      <button onClick={() => renameVault(index, newVaultName)}>
                        Rename
                      </button>
                    </>
                  ) : (
                    <>
                      {vault.name}
                      <Image
                        src="/trash.svg"
                        alt=""
                        width={17}
                        height={7}
                        className={styles.actionIcon}
                        onClick={() => deleteVault(index)}
                      />
                      <Image
                        src="/rename.svg"
                        alt=""
                        width={17}
                        height={7}
                        className={styles.actionIcon}
                        onClick={() => {
                          setRenamingIndex(index)
                          setNewVaultName(vault.name)
                        }}
                      />
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Main>
    </>
  )
}

export default Sidebar

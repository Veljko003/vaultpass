// Imports
import Link from "next/link"

import Title from "@/web/components/ui/headers/Title"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Container from "@/web/components/ui/containers/Container"
import Button from "@/web/components/ui/buttons/Button"
import styles from "@/web/styles/Home.module.css"
import ThemeSwitchButton from "@/web/components/ui/ThemeSwitchButton"

// Welcome function
export default function Welcome() {
  return (
    <>
      <Main>
        <ThemeSwitchButton />
        <Container>
          <Title titleLabel="VaultPass" />
          <p className={styles.paragraphe}>
            VaultPass is an online password manager. <br /> Log into your
            account or if you <br /> don&apos;t have one, create it.
          </p>
          <br />
          <br />
          <Link href="/sign-in">
            <Button btnLabel="Sign in" />
          </Link>
          <Link href="/sign-up">
            <Button btnLabel="Sign up" />
          </Link>
        </Container>
      </Main>
      <Footer />
    </>
  )
}
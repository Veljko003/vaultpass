// Imports
import Link from "next/link"

import HeadPage from "@/web/components/HeadPage"
import Title from "@/web/components/Title"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Container from "@/web/components/Container"
import Button from "@/web/components/Button"
import styles from "@/web/styles/Home.module.css"

// Welcome function
export default function Welcome() {
  return (
      <>
        <HeadPage pageTitle="VaultPass" />
        <Main>
          <Container>
              <Title titleLabel="VaultPass" />
              <p className={styles.paragraphe}>VaultPass is an online password manager. <br /> Log into your account or if you <br /> don&apos;t have one, create it.</p>
              <br />
              <Link href="/home-page"><Button btnLabel="Let's go" /></Link>
              <br />
              <br />
              <Link href="/sign-in"><Button btnLabel="Log in" /></Link>
              <Link href="/sign-up"><Button btnLabel="Sign up" /></Link>
          </Container>
        </Main>
        <Footer />
      </>
  )
}
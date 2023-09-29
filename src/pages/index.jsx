// Imports
import HeadPage from "@/web/components/HeadPage"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Container from "@/web/components/Container"
import Button from "@/web/components/Button"
import styles from "@/web/styles/Home.module.css"
import ThemeSwitchButton from "@/web/components/ThemeSwitchButton"
import Subtitle from "@/web/components/Subtitle"
import InputField from "@/web/components/InputField"

// LandingPage function
export default function LandingPage() {
  return (
      <>
        <HeadPage />
        <Main>
          <ThemeSwitchButton />
          <Container>
              <Subtitle titleLabel="Enter your e-mail" />
              <InputField type="email" placeholder="someone@domain.com" className={styles.emailOTP} />
              <br />
              <br />
              <Button btnLabel="Send code" />
          </Container>
        </Main>
        <Footer />
      </>
  )
}
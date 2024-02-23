// Imports
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Container from "@/web/components/ui/containers/Container"
import Button from "@/web/components/ui/buttons/Button"
import styles from "@/web/styles/Home.module.css"
import ThemeSwitchButton from "@/web/components/ui/ThemeSwitchButton"
import Subtitle from "@/web/components/ui/headers/Subtitle"
import InputField from "@/web/components/ui/forms/InputField"

// LandingPage function
export default function LandingPage() {
  const handleSendCode = async () => {
    //
  }

  return (
    <>
      <Main>
        <ThemeSwitchButton />
        <Container>
          <Subtitle titleLabel="Enter your e-mail" />
          <InputField
            type="email"
            placeholder="someone@domain.com"
            className={styles.emailOTP}
          />
          <br />
          <br />
          <Button btnLabel="Send code" onClick={handleSendCode} />
        </Container>
      </Main>
      <Footer />
    </>
  )
}

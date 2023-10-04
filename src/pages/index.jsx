// Imports
import axios from "axios";
import { useRouter } from 'next/router';

import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Footer from "@/web/components/Footer";
import Container from "@/web/components/Container";
import Button from "@/web/components/Button";
import styles from "@/web/styles/Home.module.css";
import ThemeSwitchButton from "@/web/components/ThemeSwitchButton";
import Subtitle from "@/web/components/Subtitle";
import InputField from "@/web/components/InputField";

// LandingPage function
export default function LandingPage() {
  const router = useRouter();

  const handleSendCode = async () => {
    try {
      // Make an API call to your backend
      const response = await axios.post("/send-email", { email: enteredEmail });

      // Handle the response (e.g., show a success message)
      console.log(response.data.message);

      // After sending email is succesful, redirect to another page
      router.push('/otp-verify-page'); 
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Failed to send email:", error.message);
    }
  };
  return (
    <>
      <HeadPage />
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
  );
}

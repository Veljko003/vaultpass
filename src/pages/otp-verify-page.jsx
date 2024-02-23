import React, { useState, useRef } from "react"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Container from "@/web/components/ui/containers/Container"
import Button from "@/web/components/ui/buttons/Button"
import styles from "@/web/styles/Home.module.css"
import ThemeSwitchButton from "@/web/components/ui/ThemeSwitchButton"
import Title from "@/web/components/ui/headers/Title"

export default function VerificationOTP() {
  const [otp, setOTP] = useState(["", "", "", ""]) // Initialize with four empty strings
  const inputRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef()
  ])

  // Function to handle OTP input changes
  const handleOTPChange = (event, index) => {
    const { value } = event.target

    // Check if the input is a number or Backspace key
    if (/^\d$/.test(value) || value === "") {
      // Update the OTP array at the specified index
      const updatedOTP = [...otp]
      updatedOTP[index] = value
      setOTP(updatedOTP)

      // Move focus to the previous or next input if available
      if (value === "" && index > 0) {
        inputRefs.current[index - 1].current.focus() // Move to the previous input when Backspace is pressed
      } else if (index < 3) {
        inputRefs.current[index + 1].current.focus() // Move to the next input
      }
    }
  }

  return (
    <>
      <Main>
        <ThemeSwitchButton />
        <Container>
          <Title titleLabel="Verify code" />
          <br />
          <form>
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                value={value}
                onChange={(e) => handleOTPChange(e, index)}
                maxLength="1"
                className={styles.otpInput}
                ref={inputRefs.current[index]}
              />
            ))}
            <br />
            <br />
            <br />
            <Button btnLabel="Verify code" />
          </form>
        </Container>
      </Main>
      <Footer />
    </>
  )
}

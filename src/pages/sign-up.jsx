// Imports
import * as yup from "yup"
import { useRouter } from "next/router"
import Link from "next/link"

import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/ui/forms/FormField.jsx"
import SubmitButton from "@/web/components/ui/buttons/SubmitButton.jsx"
import ThemeSwitchButton from "@/web/components/ui/ThemeSwitchButton"
import apiClient from "@/web/services/apiClient.js"

// Form attributes
const initialValues = {
  username: "",
  email: "",
  password: ""
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1)
    .required("Username is required")
    .label("Username"),
  email: yup.string().email().required("E-mail is required").label("E-mail"),
  password: yup
    .string()
    .min(8)
    .matches(/^.*(?=.*[0-9]+).*$/, "Password must contain a number")
    .matches(
      /^.*(?=.*\p{Ll}+).*$/u,
      "Password must contain a lower case letter"
    )
    .matches(
      /^.*(?=.*\p{Lu}+).*$/u,
      "Password must contain a upper case letter"
    )
    .matches(
      /^.*(?=.*[^0-9\p{L}]+).*$/u,
      "Password must contain a special character"
    )
    .required("Password is required")
    .label("Password")
})

// SignUp function
const SignUp = () => {
  const router = useRouter()
  const handleSubmit = async (values) => {
    try {
      await apiClient.post("/sign-up", values)

      router.push("/sign-in")
    } catch (err) {
      // error handling
    }
  }

  return (
    <>
      <Main>
        <ThemeSwitchButton />
        <br />
        <Form
          title="SIGN UP"
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          <FormField name="username" placeholder="Username" label="Username" />
          <FormField
            name="email"
            type="email"
            placeholder="E-mail"
            label="E-mail"
          />
          <FormField
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
          />
          <SubmitButton btnLabel="Create account" />
          <br />
          <br />
          <br />
          <span className="text-sm text-[#111]">
            You already have an account ? <br />
            <Link href="/sign-in" className="text-[#0E8388]">
              Log in
            </Link>
          </span>
          <br />
          <br />
        </Form>
      </Main>
      <Footer />
    </>
  )
}

export default SignUp

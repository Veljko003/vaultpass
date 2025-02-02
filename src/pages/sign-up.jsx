// Imports
import * as yup from "yup"
import { useRouter } from "next/router"
import { useMutation } from "@tanstack/react-query"

import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Form from "@/web/components/ui/forms/Form.jsx"
import FormField from "@/web/components/ui/forms/FormField.jsx"
import SubmitButton from "@/web/components/ui/buttons/SubmitButton.jsx"
import ThemeSwitchButton from "@/web/components/ui/ThemeSwitchButton"
import ClickableRedirect from "@/web/components/ui/ClickableRedirect"
import apiClient from "@/web/services/apiClient.js"
import {
  nameValidator,
  passwordValidator,
  emailValidator
} from "@/utils/validators"

// Form attributes
const initialValues = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: ""
}

const validationSchema = yup.object().shape({
  username: nameValidator.label("Username"),
  firstName: nameValidator.label("First Name"),
  lastName: nameValidator.label("Last Name"),
  email: emailValidator.label("E-mail"),
  password: passwordValidator.label("Password")
})

const FullNameFormFields = () => (
  <>
    <FormField
      name="firstName"
      type="text"
      placeholder="John"
      label="First name"
    />
    <FormField
      name="lastName"
      type="text"
      placeholder="Doe"
      label="Last name"
    />
  </>
)

// SignUp function
const SignUp = () => {
  const router = useRouter()
  const { mutateAsync } = useMutation({
    mutationFn: (values) => apiClient.post("/users", values)
  })
  const handleSubmit = async (values) => {
    await mutateAsync(values)
    router.push("/welcome")

    return true
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
          <FormField
            name="username"
            type="text"
            placeholder="jdoe"
            label="Username"
          />
          <FullNameFormFields />
          <FormField
            name="email"
            type="email"
            placeholder="john.doe@tomail.com"
            label="E-mail"
          />
          <FormField
            name="password"
            type="password"
            placeholder="C4gdv@03tw_"
            label="Password"
          />
          <SubmitButton btnLabel="Create account" />
          <br />
          <br />
          <br />
          <ClickableRedirect
            redirectMessage="Already have an account ?"
            redirectLink="/sign-in"
            redirectLinkLabel="Log in"
          />
          <br />
          <br />
          </Form>
      </Main>
      <Footer />
    </>
  )
}

export default SignUp

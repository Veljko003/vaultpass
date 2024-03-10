// Imports
import * as yup from "yup"
import { useRouter } from "next/router"
import { useMutation } from "@tanstack/react-query"

import Main from "@/web/components/Main"
import Form from "@/web/components/ui/forms/Form"
import FormField from "@/web/components/ui/forms/FormField"
import SubmitButton from "@/web/components/ui/buttons/SubmitButton"
import Footer from "@/web/components/Footer"
import ThemeSwitchButton from "@/web/components/ui/ThemeSwitchButton"
import ClickableRedirect from "@/web/components/ui/ClickableRedirect"
import apiClient from "@/web/services/apiClient"
import { emailValidator, passwordValidator } from "@/utils/validators"
import { useSession } from "@/web/components/SessionContext"

// Form attributes
const initialValues = {
  email: "",
  password: ""
}

const validationSchema = yup.object().shape({
  email: emailValidator.label("E-mail"),
  password: passwordValidator.label("Password")
})

// SignIn function
const SignIn = () => {
  const router = useRouter()
  const { saveSessionToken } = useSession()
  const { mutateAsync } = useMutation({
    mutationFn: (values) => apiClient.post("/sessions", values)
  })
  const handleSubmit = async (values) => {
    const { result: jwt } = await mutateAsync(values)

    saveSessionToken(jwt)

    router.push("/all-items")
  }

  return (
    <>
      <Main>
        <ThemeSwitchButton />
        <br />
        <Form
          title="SIGN IN"
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          <FormField
            name="email"
            type="email"
            placeholder="Email"
            label="Email"
          />
          <FormField
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
          />
          <SubmitButton btnLabel="Log in" />
          <br />
          <br />
          <br />
          <ClickableRedirect
            redirectMessage="You don't have an account ?"
            redirectLink="/sign-up"
            redirectLinkLabel="Create one"
          />
          <br />
          <br />
        </Form>
      </Main>
      <Footer />
    </>
  )
}

export default SignIn

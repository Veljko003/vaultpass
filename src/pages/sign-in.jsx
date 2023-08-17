// Imports
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Form from "@/web/components/Form";
import FormField from "@/web/components/FormField";
import SubmitButton from "@/web/components/SubmitButton";
import Footer from "@/web/components/Footer";
import ThemeSwitchButton from "@/web/components/ThemeSwitchButton";
import api from "@/web/services/api";

// Form attributes
const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required").label("Username"),
  password: yup.string().min(8).required("Password is required").label("Password"),
});

// SignIn function
const SignIn = () => {
  const router = useRouter();
  const [signInError, setSignInError] = useState(null);

  // Function to be executed when the form is submitted
  const handleSubmit = async (values) => {
    try {
      const response = await api.post("/sign-in", values);
      
      if (response.status === 200) {
        // Successful sign-in, you can handle user authentication here
        router.push("/all-items");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setSignInError(error.response.data.error);
      } else {
        setSignInError("An error occurred while signing in.");
      }
    }
  };

  return (
    <>
      <HeadPage />
      <Main>
        <ThemeSwitchButton />
        <br />
        <Form
          title="SIGN IN"
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {signInError && <p className="text-red-500">{signInError}</p>}
          <FormField
            name="username"
            type="text"
            placeholder="Username"
            label="Username"
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
          <span className="text-sm text-[#111]">
            You don&apos;t have an account ? <br />
            <Link href="/sign-up" className="text-[#0E8388]">
              Create one
            </Link>
          </span>
          <br />
          <br />
        </Form>
      </Main>
      <Footer />
    </>
  );
};

export default SignIn;

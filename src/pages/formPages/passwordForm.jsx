// Imports
import * as yup from "yup";

import styles from "@/web/styles/Form.module.css";
import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Sidebar from "@/web/components/Sidebar";
import ThemeSwitchButton from "@/web/components/ThemeSwitchButton";
import Button from "@/web/components/Button";
import FormPage from "@/web/components/FormPage";
import FormField from "@/web/components/FormField";
import Subtitle from "@/web/components/Subtitle";
import Textarea from "@/web/components/Textarea";

// Form attributes
const initialValues = {
  title: "",
  password: "",
};

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required").label("Title"),
  email: yup.string().email().required("E-mail is required").label("E-mail"),
  username: yup.string().required("Username is required").label("Username"),
  password: yup
    .string()
    .min(8)
    .required("Password is required")
    .label("Password"),
});

// PasswordForm function
const PasswordForm = () => {
  return (
    <>
      <HeadPage />
      <Main>
        <ThemeSwitchButton />
        <Sidebar />
        <FormPage
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <FormField
            name="title"
            type="text"
            placeholder="Title"
            label="Title"
          />
          <br />
          <Subtitle titleLabel="Login details" />
          <FormField
            name="email"
            type="email"
            placeholder="E-mail"
            label="E-mail"
          />
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
          <br />
          <Subtitle titleLabel="Websites" />
          <FormField
            name="websites"
            type="text"
            placeholder="Website URL"
            label="Website"
          />
          <br />
          <Subtitle titleLabel="Custom Fields" />
          <br />
          <Subtitle titleLabel="Other" />
          <br />
          <Textarea />
        </FormPage>
      </Main>
    </>
  );
};

export default PasswordForm;

// Imports
import * as yup from "yup";

import styles from "@/web/styles/Form.module.css";
import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Sidebar from "@/web/components/Sidebar";
import ThemeSwitchButton from "@/web/components/ThemeSwitchButton";
import Button from "@/web/components/Button";
import CancelButton from "@/web/components/CancelButton";
import FormPage from "@/web/components/FormPage";
import FormField from "@/web/components/FormField";
import Subtitle from "@/web/components/Subtitle";
import Textarea from "@/web/components/Textarea";
import AddButton from "@/web/components/AddButton";

// Form attributes
const initialValues = {
  title: "",
  password: "",
};

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required").label("Title"),
  email: yup.string().email().label("E-mail"),
  username: yup.string().label("Username"),
  password: yup
    .string()
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
          <AddButton btnLabel="Add websites" />
          <br />
          <br />
          <Subtitle titleLabel="Custom Fields" />
          <AddButton btnLabel="Add custom fields" />
          <br />
          <br />
          <Subtitle titleLabel="Other" />
          <br />
          <Textarea />
          <br />
          <br />
          <Button btnLabel="Save" />
          <CancelButton />
        </FormPage>
      </Main>
    </>
  );
};

export default PasswordForm;

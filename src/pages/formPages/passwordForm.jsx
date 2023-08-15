// Imports
import * as yup from "yup";
import React, { useState } from "react";

import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Sidebar from "@/web/components/Sidebar";
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
  email: "",
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required").label("Title"),
  email: yup.string().email().label("E-mail"),
  username: yup.string().label("Username"),
  password: yup.string().label("Password"),
});

// PasswordForm function
const PasswordForm = () => {
  const [websiteFields, setWebsiteFields] = useState([{ name: "website1" }]);

  const addWebsiteField = () => {
    setWebsiteFields([
      ...websiteFields,
      { name: `website${websiteFields.length + 1}` },
    ]);
  };
  return (
    <>
      <HeadPage />
      <Main>
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
          {websiteFields.map((field, index) => (
            <FormField
              key={field.name}
              name={field.name}
              type="text"
              placeholder="Website URL"
              label={`Website ${index + 1}`}
            />
          ))}
          <AddButton btnLabel="Add websites" onClick={addWebsiteField} />
          <br />
          <br />
          <Subtitle titleLabel="Custom Fields" />
          <AddButton btnLabel="Add custom fields" />
          <br />
          <br />
          <Subtitle titleLabel="Other" />
          <br />
          <Textarea placeholder="Notes" />
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

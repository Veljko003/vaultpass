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
import Modal from "@/web/components/Modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customFields, setCustomFields] = useState([]); // State for custom fields
  const [customFieldName, setCustomFieldName] = useState(""); // State to store input

  // Add websites
  const addWebsiteField = () => {
    setWebsiteFields([
      ...websiteFields,
      { name: `website${websiteFields.length + 1}` },
    ]);
  };

  // Open/Close Modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Add custom field
  const addCustomField = () => {
    setCustomFields([...customFields, customFieldName]);
    closeModal();
  };

  const handleCustomFieldInputChange = (event) => {
    setCustomFieldName(event.target.value);
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
              placeholder={`Website URL ${index + 1}`}
              label={`Website ${index + 1}`}
            />
          ))}
          <AddButton btnLabel="Add websites" onClick={addWebsiteField} />
          <br />
          <br />
          <Subtitle titleLabel="Custom Fields" />
          {customFields.map((fieldName, index) => (
            <FormField
              key={`customField${index}`}
              name={`customField${index}`}
              type="text"
              placeholder={`${fieldName}`}
              label={fieldName}
            />
          ))}
          <AddButton btnLabel="Add custom fields" onClick={openModal} />
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            onClick={addCustomField}
            modalTitle="Custom Field"
            modalInputPlaceholder="Enter Custom Field name"
            inputValue={customFieldName}
            onInputChange={handleCustomFieldInputChange}
          />
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

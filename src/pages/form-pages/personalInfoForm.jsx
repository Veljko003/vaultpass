// Imports
import * as yup from "yup" 

import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Sidebar from "@/web/components/ui/Sidebar";
import Button from "@/web/components/ui/buttons/Button";
import FormField from "@/web/components/ui/forms/FormField";
import FormPage from "@/web/components/ui/forms/FormPage";
import Subtitle from "@/web/components/ui/headers/Subtitle";
import CancelButton from "@/web/components/ui/buttons/CancelButton";
import Textarea from "@/web/components/ui/forms/Textarea";

// Form attributes
const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required").label("Title"),
});

// PersonalInfoForm function
const PersonalInfoForm = () => {
  return (
    <>
      <HeadPage />
      <Main>
        <Sidebar />
        <FormPage validationSchema={validationSchema}>
          <FormField
            name="title"
            type="text"
            placeholder="Title"
            label="Title"
          />
          <br />
          <Subtitle titleLabel="Contact details" />
          <FormField
            name="full-name"
            type="text"
            placeholder="Full Name"
            label="Full-Name"
          />
          <br />
          <FormField
            name="email"
            type="email"
            placeholder="E-mail"
            label="E-mail"
          />
          <FormField
            name="phone"
            type="telephone"
            placeholder="Phone"
            label="Phone"
          />
          <br />
          <Subtitle titleLabel="Address Details" />
          <FormField
            name="address"
            type="text"
            placeholder="Address Line 1"
            label="Address"
          />
          <FormField
            name="address2"
            type="text"
            placeholder="Address Line 2"
            label="Address-2"
          />
          <FormField
            name="city"
            type="text"
            placeholder="City"
            label="City"
          />
          <FormField
            name="postal"
            type="text"
            placeholder="ZIP or Postal Code"
            label="Postal"
          />
          <FormField
            name="province"
            type="text"
            placeholder="State or Province"
            label="province"
          />
          <FormField
            name="country"
            type="text"
            placeholder="Country"
            label="Country"
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

export default PersonalInfoForm;

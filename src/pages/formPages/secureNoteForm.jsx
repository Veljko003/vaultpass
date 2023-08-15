// Imports
import * as yup from "yup"

import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Footer from "@/web/components/Footer";
import Sidebar from "@/web/components/Sidebar";
import ThemeSwitchButton from "@/web/components/ThemeSwitchButton";
import Button from "@/web/components/Button";
import FormPage from "@/web/components/FormPage";
import FormField from "@/web/components/FormField";
import Textarea from "@/web/components/Textarea";
import CancelButton from "@/web/components/CancelButton";

// Form attributes
const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required").label("Title"),
});

// SecureNoteForm function
const SecureNoteForm = () => {
  return (
    <>
      <HeadPage />
      <Main>
        <ThemeSwitchButton />
        <Sidebar />
        <FormPage validationSchema={validationSchema}>
        <FormField
            name="title"
            type="text"
            placeholder="Title"
            label="Title"
          />
          <br />
          <Textarea placeholder="Secure Note" />
          <br />
          <Button btnLabel="Save" />
          <CancelButton />
        </FormPage>
      </Main>
      <Footer />
    </>
  );
};

export default SecureNoteForm;

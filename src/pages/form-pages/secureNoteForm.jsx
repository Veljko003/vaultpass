// Imports
import * as yup from "yup"

import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Sidebar from "@/web/components/ui/Sidebar"
import Button from "@/web/components/ui/buttons/Button"
import Form from "@/web/components/ui/forms/Form"
import FormField from "@/web/components/ui/forms/FormField"
import Textarea from "@/web/components/ui/forms/Textarea"
import CancelButton from "@/web/components/ui/buttons/CancelButton"

// Form attributes
const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required").label("Title")
})

// SecureNoteForm function
const SecureNoteForm = () => (
  <>
    <Main>
      <Sidebar />
      <Form validationSchema={validationSchema}>
        <FormField name="title" type="text" placeholder="Title" label="Title" />
        <br />
        <Textarea placeholder="Secure Note" />
        <br />
        <Button btnLabel="Save" />
        <CancelButton />
      </Form>
    </Main>
    <Footer />
  </>
)

export default SecureNoteForm

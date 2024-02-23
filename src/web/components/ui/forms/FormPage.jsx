import { Formik, Form as FormikForm } from "formik"
import styles from "@/web/styles/Form.module.css"

const Form = (props) => {
  const { children, ...otherProps } = props

  return (
    <Formik {...otherProps}>
      <FormikForm noValidate className={styles.formPageContainer}>
        {children}
      </FormikForm>
    </Formik>
  )
}
export default Form

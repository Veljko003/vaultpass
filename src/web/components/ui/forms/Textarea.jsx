import styles from "@/web/styles/Home.module.css"

const Textarea = (props) => {
  const { placeholder } = props

  return (
    <textarea
      id=""
      cols="60"
      rows="10"
      className={styles.textarea}
      placeholder={placeholder}></textarea>
  )
}

export default Textarea

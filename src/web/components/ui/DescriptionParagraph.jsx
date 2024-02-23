import styles from "@/web/styles/Home.module.css"

const DescriptionParagraph = (props) => {
  const { children } = props

  return (
    <>
      <div className={styles.paragraphContainer}>
        <p className={styles.textParagraph}>{children}</p>
      </div>
    </>
  )
}

export default DescriptionParagraph

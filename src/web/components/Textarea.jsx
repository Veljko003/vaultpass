import styles from "@/web/styles/Home.module.css"

const Textarea = (props) => {
    const { titleLabel } = props

    return (
        <textarea id="" cols="60" rows="10" className={styles.textarea} placeholder="Notes"></textarea>
    )
}

export default Textarea
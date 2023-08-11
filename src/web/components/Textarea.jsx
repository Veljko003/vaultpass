import styles from "@/web/styles/Home.module.css"

const Textarea = (props) => {
    const { titleLabel } = props

    return (
        <textarea name="" id="" cols="30" rows="10" className={styles.textarea} placeholder="Notes"></textarea>
    )
}

export default Textarea
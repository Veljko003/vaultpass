import styles from "@/web/styles/Home.module.css"

const CancelButton = (props) => {
    const { onClick } = props

    return (
        <button className={styles.cancelBtn} onClick={onClick}>Cancel</button>
    )
}

export default CancelButton
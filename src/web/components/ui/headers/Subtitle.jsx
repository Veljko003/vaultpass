import styles from "@/web/styles/Home.module.css"

const Subtitle = (props) => {
    const { titleLabel } = props

    return (
        <h3 className={styles.subTitle}>
            {titleLabel}
        </h3>
    )
}

export default Subtitle
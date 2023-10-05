import styles from "@/web/styles/Home.module.css"

const ListContainer = (props) => {
    const { children } = props

    return (
        <div className={styles.listContainer}>
            {children}
        </div>
    )
}

export default ListContainer
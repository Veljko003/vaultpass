import styles from "@/web/styles/Home.module.css"
import { useRouter } from "next/router"; // Import the useRouter hook

const CancelButton = () => {
    const router = useRouter(); // Initialize the useRouter hook

    const handleCancel = () => {
      router.back(); // Navigate back to the previous page
    };
    return (
        <button className={styles.cancelBtn} onClick={handleCancel}>Cancel</button>
    )
}

export default CancelButton
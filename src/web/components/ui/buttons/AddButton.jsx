import React from "react";
import styles from "@/web/styles/Home.module.css";

const AddButton = (props) => {
  const { onClick, btnLabel } = props;

  return (
    <button className={styles.btnAddMore} onClick={onClick}>
      <span className={styles.plusAdd}>+</span>{" "}
      <span className={styles.textAdd}>{btnLabel}</span>
    </button>
  );
};

export default AddButton;

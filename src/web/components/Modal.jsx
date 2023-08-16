// Imports
import React, { useState } from 'react';

import styles from '@/web/styles/Modal.module.css';
import InputField from './InputField';
import Button from './Button';

// Modal
const Modal = ({ isOpen, onClose, modalTitle, modalInputPlaceholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>{modalTitle}</h2>
        <br />
        <InputField
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={modalInputPlaceholder}
          className="p-2 border-solid border-slate-300 border-2 rounded-md bg-transparent w-full"
        />
        <br />
        <br />
        <Button btnLabel="Save" />
        <button onClick={onClose} className={styles.cancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;

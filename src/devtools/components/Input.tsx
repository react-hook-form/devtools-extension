import styles from '../styles/Input.module.css';
import React from 'react';

interface InputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return <input className={styles.input} placeholder={placeholder} />;
};

export default Input;

import styles from '../styles/FormIdSelector.module.css';
import React from 'react';

interface FormIdSelectorProps {
  ids: string[];
}

const FormIdSelector: React.FC<FormIdSelectorProps> = ({ ids }) => {
  return (
    <select className={styles.selector}>
      {ids.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FormIdSelector;

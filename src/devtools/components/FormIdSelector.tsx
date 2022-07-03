import styles from '../styles/FormIdSelector.module.css';
import type React from 'react';

interface FormIdSelectorProps {
  ids: string[];
  id: string;
  onChange: (id: string) => void;
}

const FormIdSelector: React.FC<FormIdSelectorProps> = ({
  ids,
  id,
  onChange,
}) => {
  return (
    <select
      className={styles.selector}
      value={id}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      {ids.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FormIdSelector;

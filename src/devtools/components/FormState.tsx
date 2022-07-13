import styles from '../styles/FormState.module.css';
import Button from './Button';
import type { StateFields } from './State';
import State from './State';
import type React from 'react';
import { useState } from 'react';

const FormState: React.FC<{
  state: { valid: boolean } & StateFields;
}> = ({ state }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {isCollapsed && (
        <div className={styles.state}>
          <State state={state} />
        </div>
      )}
      <Button
        className={styles.button}
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        <span
          style={{ color: state.valid ? '#1bda2b' : '#ec5990', fontSize: 18 }}
        >
          ■
        </span>
        <span> Form State</span>
      </Button>
    </>
  );
};

export default FormState;

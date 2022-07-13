import styles from '../styles/FieldState.module.css';
import Button from './Button';
import type { StateFields } from './State';
import State from './State';
import clsx from 'clsx';
import type React from 'react';
import { useState } from 'react';

interface FieldStateProps {
  name: string;
  hasError: boolean;
  isNative: boolean;
  state: StateFields;
}

const FieldState: React.FC<FieldStateProps> = ({
  name,
  hasError,
  isNative,
  state,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div
      className={styles.fieldState}
      style={{
        borderLeft: `2px solid ${hasError ? '#bf1650' : '#191d3a'}`,
      }}
    >
      <div className={styles.actionsAndName}>
        <div className={styles.actions}>
          <Button
            className={clsx(styles.button, styles.collapseButton)}
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            {isCollapsed ? '+' : '-'}
          </Button>
          <Button className={clsx(styles.button, styles.isNativeButton)}>
            {isNative ? 'Native' : 'Custom'}
          </Button>
        </div>
        <div className={styles.name}>{name}</div>
      </div>
      {!isCollapsed && <State state={state} />}
    </div>
  );
};

export default FieldState;

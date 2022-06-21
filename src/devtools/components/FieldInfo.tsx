import styles from '../styles/FieldInfo.module.css';
import Button from './Button';
import Info from './Info';
import clsx from 'clsx';
import React, { useState } from 'react';

interface FieldInfoProps {
  name: string;
  hasError: boolean;
  isNative: boolean;
  info: Record<string, string | boolean | number>;
}

const FieldInfo: React.FC<FieldInfoProps> = ({
  name,
  hasError,
  isNative,
  info,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={styles.fieldInfo}
      style={{
        borderLeft: `2px solid ${hasError ? '#bf1650' : '#191d3a'}`,
      }}
    >
      <div className={styles.field}>
        <Button
          className={clsx(styles.button, styles.collapseButton)}
          onClick={() => setIsCollapsed((perv) => !perv)}
        >
          {isCollapsed ? '-' : '+'}
        </Button>
        <Button className={clsx(styles.button, styles.isNativeButton)}>
          {isNative ? 'Native' : 'Custom'}
        </Button>
        <div style={{ paddingTop: 2 }}>{name}</div>
      </div>
      {isCollapsed && <Info info={info} />}
    </div>
  );
};

export default FieldInfo;

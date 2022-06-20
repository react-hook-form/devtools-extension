import styles from '../styles/Info.module.css';
import React from 'react';

const Info: React.FC<{ info: Record<string, string | boolean | number> }> = ({
  info,
}) => {
  return (
    <div className={styles.infos}>
      {Object.entries(info).map(([key, value]) => (
        <div className={styles.info}>
          <div className={styles.infoKey}>{key}:</div>
          {typeof value === 'boolean' || typeof value === 'number' ? (
            <div
              style={{ color: value ? '#1bda2b' : '#ec5990' }}
            >{`${value}`}</div>
          ) : (
            <div>{value}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Info;

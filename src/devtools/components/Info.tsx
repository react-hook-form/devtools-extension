import styles from '../styles/Info.module.css';
import React from 'react';

export type InfoValues = Record<string, string | boolean | number | object>;

const InfoValue: React.FC<{ value: string | boolean | number | object }> = ({
  value,
}) => {
  if (typeof value === 'boolean' || typeof value === 'number') {
    return (
      <div style={{ color: value ? '#1bda2b' : '#ec5990' }}>{`${value}`}</div>
    );
  }
  if (typeof value === 'object') {
    return <div>[Nested Object]</div>;
  }
  return <div>{value}</div>;
};

const Info: React.FC<{ info: InfoValues }> = ({ info }) => {
  return (
    <div className={styles.infos}>
      {Object.entries(info).map(([key, value]) => (
        <div className={styles.info}>
          <div className={styles.infoKey}>{key}:</div>
          <InfoValue value={value} />
        </div>
      ))}
    </div>
  );
};

export default Info;

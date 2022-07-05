import styles from '../styles/State.module.css';
import type React from 'react';

export type StateFields = Record<
  string,
  string | boolean | number | object | undefined
>;

const StateValue: React.FC<{
  value?: string | boolean | number | object;
}> = ({ value }) => {
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

const State: React.FC<{ state: StateFields }> = ({ state }) => {
  return (
    <div className={styles.states}>
      {Object.entries(state)
        .filter(([, value]) => typeof value !== 'undefined')
        .map(([key, value]) => (
          <div className={styles.state} key={key}>
            <div className={styles.stateKey}>{key}:</div>
            <div className={styles.stateValue}>
              <StateValue value={value} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default State;

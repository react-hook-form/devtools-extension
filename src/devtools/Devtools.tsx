import FieldState from './components/FieldState';
import FormIdSelector from './components/FormIdSelector';
import FormState from './components/FormState';
import Input from './components/Input';
import styles from './styles/Devtools.module.css';
import './styles/global.css';
import React from 'react';

const Devtools: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <FormIdSelector ids={['id-001', 'id-002', 'id-003']} />
        <Input placeholder="Filter name..." />
      </div>
      <div className={styles.middle}>
        <FieldState
          name="field1"
          hasError={false}
          isNative
          state={{ type: 'text', touched: true, nestedObject: { lol: 'olo' } }}
        />
        <FieldState
          name="field2"
          hasError
          isNative={false}
          state={{ touched: true, dirty: true }}
        />
      </div>
      <div>
        <FormState
          state={{ valid: false, submitted: false, count: 1, errors: 0 }}
        />
      </div>
    </div>
  );
};

export default Devtools;

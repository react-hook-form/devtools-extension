import { sendExtensionOneTimeMessage } from '../services/extension';
import { UpdatePayload } from '../typings/webpage-message';
import FieldState from './components/FieldState';
import FormIdSelector from './components/FormIdSelector';
import FormState from './components/FormState';
import Input from './components/Input';
import styles from './styles/Devtools.module.css';
import './styles/global.css';
import React, { useEffect, useState } from 'react';

const Devtools: React.FC = () => {
  const [data, setData] = useState<Record<string, UpdatePayload['data']>>({});

  const getData = () => {
    sendExtensionOneTimeMessage(
      chrome.devtools.inspectedWindow.tabId,
      'get-devtool-data',
      (response) => {
        setData(response.data);
      },
    );
  };

  useEffect(() => {
    getData();
    const intervalId = setInterval(getData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <FormIdSelector ids={Object.keys(data)} />
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

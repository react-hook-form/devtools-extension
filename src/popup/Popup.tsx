import { sendExtensionOneTimeMessage } from '../services/extension';
import styles from './Popup.module.css';
import type React from 'react';
import { useEffect, useState } from 'react';

const Popup: React.FC = () => {
  const [enable, setEnable] = useState(false);
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      sendExtensionOneTimeMessage(tab.id!, 'get-enable-status', (response) => {
        setEnable(response.enabled);
      });
    });
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.notice}>
        This page {enable ? 'is' : "is't"} using the debug mode of React Hook
        Form. {enable ? '✅' : '❌'}
      </div>
      {enable ? (
        <div>
          Open the developer tools, and "React Hook Form" tab will appear to the
          right.
        </div>
      ) : (
        <div>
          If your page have React Hook Form. Please press <kbd>Ctrl</kbd> +{' '}
          <kbd>Shift</kbd> + <kbd>R</kbd> to reload the page.
        </div>
      )}
      <hr />
      <div>
        Need help? Create an issue or discussion{' '}
        <a
          href="https://github.com/react-hook-form/react-hook-form"
          target="_blank"
        >
          here
        </a>
        !
      </div>
    </div>
  );
};

export default Popup;

import styles from './Popup.module.css';
import React from 'react';

const Popup: React.FC<{ enable: boolean }> = ({ enable }) => {
  return (
    <div className={styles.main}>
      <div className={styles.notice}>
        This page {enable ? 'is' : "is't"} using the development build of React
        Hook Form. {enable ? '✅' : '❌'}
      </div>
      {enable && (
        <div>
          Open the developer tools, and "React Hook Form" tab will appear to the
          right.
        </div>
      )}
      <hr />
      <div>
        Need help? Create an issue or discussion{' '}
        <a
          href="https://github.com/react-hook-form/devtools-extension"
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

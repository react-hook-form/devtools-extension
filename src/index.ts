import { sendExtensionOneTimeMessage } from './services/extension';

sendExtensionOneTimeMessage('get-enable-status', (response) => {
  if (response.enabled) {
    chrome.devtools.panels.create(
      '📋 React Hook Form',
      'images/icon64.png',
      'devtools.html',
    );
  }
});

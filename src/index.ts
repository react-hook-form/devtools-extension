import { sendExtensionOneTimeMessage } from './services/extension';

chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  sendExtensionOneTimeMessage(tab.id!, 'get-enable-status', (response) => {
    if (response.enabled) {
      chrome.devtools.panels.create(
        '📋 React Hook Form',
        'images/icon64.png',
        'devtools.html',
      );
    }
  });
});

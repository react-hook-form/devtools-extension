import { enable } from './mock-data';

if (enable) {
  chrome.devtools.panels.create(
    '📋 React Hook Form',
    'images/icon64.png',
    'devtools.html',
  );
}

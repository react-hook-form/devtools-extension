import {
  addExtensionMessageListener,
  addExtensionOneTimeMessageListener,
} from './services/extension';

let enabledTab = new Set<number>();

chrome.tabs.onUpdated.addListener((tabId) => {
  addExtensionMessageListener((message) => {
    switch (message.type) {
      case 'WELCOME': {
        enabledTab.add(tabId);
        chrome.action.setIcon({
          tabId,
          path: { 16: 'images/icon16.png', 32: 'images/icon32.png' },
        });
        break;
      }
    }
  });
});

chrome.tabs.onRemoved.addListener((tabId) => {
  if (enabledTab.has(tabId)) {
    enabledTab.delete(tabId);
  }
});

addExtensionOneTimeMessageListener((request, _, sendResponse) => {
  switch (request.type) {
    case 'get-enable-status': {
      if (enabledTab.has(request.tabId)) {
        sendResponse({ enabled: true });
      }
      break;
    }
  }
});

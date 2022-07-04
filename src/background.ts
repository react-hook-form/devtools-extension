import {
  addExtensionMessageListener,
  addExtensionOneTimeMessageListener,
} from './services/extension';
import type { UpdatePayload } from './typings/webpage-message';

let enabledTab = new Set<number>();
let tabData = new Map<number, Record<string, UpdatePayload['data']>>();

const removeTab = (tabId: number) => {
  if (enabledTab.has(tabId)) {
    enabledTab.delete(tabId);
  }
  if (tabData.has(tabId)) {
    tabData.delete(tabId);
  }
};

chrome.tabs.onUpdated.addListener((tabId) => {
  addExtensionMessageListener((message) => {
    switch (message.type) {
      case 'WELCOME': {
        enabledTab.add(tabId);
        chrome.action.setIcon({
          tabId,
          path: {
            16: 'images/icon16.png',
            32: 'images/icon32.png',
            48: 'images/icon48.png',
            128: 'images/icon128.png',
          },
        });
        break;
      }
      case 'UPDATE': {
        if (tabData.has(tabId)) {
          tabData.get(tabId)![message.payload.id] = message.payload.data;
        } else {
          tabData.set(tabId, { [message.payload.id]: message.payload.data });
        }
        break;
      }
    }
  });
});

chrome.tabs.onRemoved.addListener((tabId) => removeTab(tabId));

addExtensionOneTimeMessageListener((request, _, sendResponse) => {
  switch (request.type) {
    case 'get-enable-status': {
      if (enabledTab.has(request.tabId)) {
        sendResponse({ enabled: true });
      }
      break;
    }
    case 'get-devtool-data': {
      sendResponse({ data: tabData.get(request.tabId)! });
      break;
    }
  }
});

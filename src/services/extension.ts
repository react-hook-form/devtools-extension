import { ExtensionMessageResponse } from '../typings/extension-message';
import { MessageData } from '../typings/webpage-message';

export const postExtensionMessage = (message: MessageData) =>
  chrome.runtime
    .connect({
      name: 'react-hook-form',
    })
    .postMessage(message);

export const addExtensionMessageListener = (
  fn: (message: MessageData) => void,
) =>
  chrome.runtime.onConnect.addListener((port) => {
    if (port.name !== 'react-hook-form') return;
    port.onMessage.addListener((message) => {
      fn(message);
    });
  });

export const sendExtensionOneTimeMessage = <
  TMessageType extends keyof ExtensionMessageResponse,
>(
  tabId: number,
  type: TMessageType,
  responseCallback?: (response: ExtensionMessageResponse[TMessageType]) => void,
) => {
  chrome.runtime.sendMessage({ type, tabId }, (response) => {
    if (responseCallback) {
      responseCallback(response);
    }
  });
};

export const addExtensionOneTimeMessageListener = (
  fn: (
    request: { type: keyof ExtensionMessageResponse; tabId: number },
    _: unknown,
    sendResponse: (
      response: ExtensionMessageResponse[keyof ExtensionMessageResponse],
    ) => void,
  ) => void,
) => {
  chrome.runtime.onMessage.addListener(fn);
};

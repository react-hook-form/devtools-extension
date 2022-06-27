import { MessageData } from '../typings/webpage-message';

const MESSAGE_SOURCE = 'react-hook-form-bridge';

export function postWebpageMessage(type: MessageData['type']) {
  window.postMessage({ source: MESSAGE_SOURCE, type } as MessageData);
}

export function addWebpageMessageListener(fn: (message: MessageData) => void) {
  window.addEventListener('message', ({ data }: MessageEvent<MessageData>) => {
    if (data.source !== MESSAGE_SOURCE) {
      return;
    }
    fn(data);
  });
}

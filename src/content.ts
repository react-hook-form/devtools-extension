import { postExtensionMessage } from './services/extension';
import {
  addWebpageMessageListener,
  postWebpageMessage,
} from './services/webpage';

postWebpageMessage('INIT');
addWebpageMessageListener((message) => {
  postExtensionMessage(message);
});

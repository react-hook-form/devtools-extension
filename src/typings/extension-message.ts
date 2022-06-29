import { UpdatePayload } from './webpage-message';

export type ExtensionMessageResponse = {
  'get-enable-status': { enabled: boolean };
  'get-devtool-data': { data: Record<string, UpdatePayload['data']> };
};

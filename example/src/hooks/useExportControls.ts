import type { MessageData } from '../../../src/typings/webpage-message';
import { useDeepCompareEffect } from 'ahooks';
import { useEffect, useState } from 'react';
import type { Control, FieldValues } from 'react-hook-form';
import { useFormState, useWatch } from 'react-hook-form';

function proxyToObject<T extends Record<string, any>>(proxy: T) {
  return Reflect.ownKeys(proxy).reduce((perv, key) => {
    perv[key] = proxy[key as keyof T];
    return perv;
  }, {} as any);
}

export function useExportControls<
  TFieldValues extends FieldValues = FieldValues,
>(id: string, control: Control<TFieldValues>) {
  const formState = useFormState({ control });
  const formValues = useWatch({ control });

  const [isExtensionEnabled, setIsExtensionEnabled] = useState(false);

  const handleInitMessage = (message: MessageEvent<MessageData>) => {
    if (
      message.data.source !== 'react-hook-form-bridge' ||
      message.data.type !== 'INIT'
    ) {
      return;
    }
    window.postMessage({
      source: 'react-hook-form-bridge',
      type: 'WELCOME',
    } as MessageData);
    setIsExtensionEnabled(true);
  };

  useEffect(() => {
    window.addEventListener('message', handleInitMessage);
    return () => window.removeEventListener('message', handleInitMessage);
  }, []);

  useDeepCompareEffect(() => {
    if (!isExtensionEnabled) return;
    window.postMessage({
      source: 'react-hook-form-bridge',
      type: 'UPDATE',
      payload: {
        id,
        data: {
          formValues,
          formState: proxyToObject(formState),
        },
      },
    } as MessageData);
  }, [isExtensionEnabled, proxyToObject(formState), formValues]);
}

import { useDeepCompareEffect } from 'ahooks';
import { Control, FieldValues } from 'react-hook-form';

export function useWindowControls<
  TFieldValues extends FieldValues = FieldValues,
>(id: string, control: Control<TFieldValues>) {
  useDeepCompareEffect(() => {
    window.__RHF_DEVTOOLS_CONTROLS__[id] = control;
  }, [control]);
}

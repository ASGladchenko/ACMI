import { controlFormikError } from '@/shared/utils';

import { FieldMode, SmartField } from '../smart-field';

export type BindProps<TValue> = {
  value: TValue;
  error?: string;
  onChange: (value: TValue) => void;
};

export type FieldBridgeInnerComponent<TValue, ExtraProps> = React.ComponentType<
  BindProps<TValue> & ExtraProps
>;

interface FieldBridgeProps<TValue, ExtraProps> {
  name: string;
  mode?: FieldMode;
  extraProps: ExtraProps;
  Component: FieldBridgeInnerComponent<TValue, ExtraProps>;
}

export const FieldBridge = <TValue, ExtraProps>({
  name,
  mode,
  Component,
  extraProps,
}: FieldBridgeProps<TValue, ExtraProps>) => {
  return (
    <SmartField mode={mode} name={name}>
      {({ form, field, meta }) => {
        const error = controlFormikError(meta, name);

        const handleChange = (next: TValue) => {
          form.setFieldValue(name, next);
        };

        return (
          <Component
            {...(extraProps as ExtraProps)}
            error={error}
            onChange={handleChange}
            value={field.value as TValue}
          />
        );
      }}
    </SmartField>
  );
};

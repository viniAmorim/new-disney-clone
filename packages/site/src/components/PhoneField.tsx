import React from 'react';
import { Controller } from 'react-hook-form';

import { Input } from '@site/uikit';

const PhoneField = ({ control, name, rules, ...props }) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field: { onChange, value, ref } }) => (
      <Input
        ref={ref}
        placeholder="(62) 91234-1234"
        format="(##) #####-####"
        mask="_"
        onChange={(val: string) => onChange(val)}
        value={value}
        {...props}
      />
    )}
  />
);

export default PhoneField;

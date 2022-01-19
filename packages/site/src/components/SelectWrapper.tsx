import React from 'react';
import { Controller } from 'react-hook-form';

import { Select } from '@site/uikit';

interface Item {
  value: string;
  label: string;
}

const SelectWrapper = ({ control, name, options, rules, ...props }) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field: { onChange, value, ref } }) => (
      <Select
        ref={ref}
        value={options.filter((c: Item) => value === c.value)}
        onChange={(val: Item) => onChange(val.value)}
        options={options}
        {...props}
      />
    )}
  />
);

export default SelectWrapper;

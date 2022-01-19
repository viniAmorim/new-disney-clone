import React, { ComponentProps, forwardRef, ReactNode } from 'react';
import ReactSelect, { Props, components } from 'react-select';

import { useTheme } from 'styled-components';

export interface SelectProps extends Props {
  isValid?: boolean;
  bottomChildren?: ReactNode;
}

const Select = forwardRef<any, SelectProps>(function(
  { isValid = true, bottomChildren, ...rest }: SelectProps,
  ref,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = useTheme();

  const styles = {
    control: provided => ({
      ...provided,
      background: theme.colors.white,
      border: isValid
        ? `1px solid ${theme.colors['gray-400']}`
        : `1px solid ${theme.colors.error}`,
      borderRadius: '4px',
      padding: '3px 10px',
    }),
  };

  let customComponents;
  if (bottomChildren) {
    const SelectMenuButton = ({
      children,
      ...props
    }: ComponentProps<typeof components.MenuList>) => {
      return (
        <components.MenuList {...props}>
          {children}
          {bottomChildren}
        </components.MenuList>
      );
    };

    customComponents = { MenuList: SelectMenuButton };
  }

  return (
    <ReactSelect
      ref={ref}
      styles={styles}
      components={customComponents}
      {...rest}
    />
  );
});

export default Select;

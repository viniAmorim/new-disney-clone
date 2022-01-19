/* eslint-disable react/no-array-index-key */
import React, { forwardRef, ReactNode, useState } from 'react';
import { Tab, TabList, TabPanel } from 'react-tabs';

import * as Styled from './styles';

export interface TabProps {
  headers: string[];
  content: ReactNode[];
}

const DefaultTab = forwardRef<any, TabProps>(
  ({ headers, content, ...rest }: TabProps, ref) => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
      <Styled.StyledTabs
        ref={ref}
        selectedIndex={tabIndex}
        onSelect={(index: number) => setTabIndex(index)}
        {...rest}
      >
        <TabList>
          {headers.map((header, key) => (
            <Tab key={key}>{header}</Tab>
          ))}
        </TabList>

        {content.map((child, key) => (
          <TabPanel key={key}>{child}</TabPanel>
        ))}
      </Styled.StyledTabs>
    );
  },
);

export default DefaultTab;

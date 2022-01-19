import React, { BaseHTMLAttributes } from 'react';
import { Col, Container, Row } from 'react-grid-system';

import * as Styled from './styles';

interface Item {
  label: string;
  link: string;
  active?: boolean;
}

export interface NavbarProps extends BaseHTMLAttributes<HTMLDivElement> {
  /**
   * Navbar items.
   */
  items: Item[];
}

const Navbar = ({ items, ...rest }: NavbarProps) => {
  return (
    <Styled.Container {...rest} suppressHydrationWarning>
      <Container>
        <Row align="center">
          <Col>
            <Styled.Logo src={require("./disney-plus-logo-1.png")} />
          </Col>
          <Col>
            <Styled.Menu>
              {items.map((tempItem) => (
                <Styled.Item key={tempItem.link}>
                  <Styled.Link href={tempItem.link} active={tempItem.active}>
                    {tempItem.label}
                  </Styled.Link>
                </Styled.Item>
              ))}
              <Styled.Avatar src={require("./avatar.jpg")} />
            </Styled.Menu>
          </Col>
        </Row>
      </Container>
    </Styled.Container>
  );
};

export default Navbar;

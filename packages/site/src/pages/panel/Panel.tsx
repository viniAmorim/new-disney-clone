import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Skeleton from 'react-loading-skeleton';

import { Card, Button } from '@site/uikit';

import { Layout } from '~/app/components';
import { Video } from '~/app/protocols/Video';

import * as Styled from './styles';

interface PanelProps {
  onRefresh: () => void;
  videos?: Video[];
  isLoading: boolean;
  total: number;
  page: number;
  onPageChange: (page: number) => void;
}

const PanelForm = ({
  videos = [],
  isLoading,
  onRefresh,
  total,
  page,
  onPageChange,
}: PanelProps) => {
  return (
    <Layout>
        <Container>
          <Styled.Franchise>
            <Styled.StyledCol>
              <Card />
            </Styled.StyledCol>
            <Styled.StyledCol>
              <Card />
            </Styled.StyledCol>
            <Styled.StyledCol>
              <Card />
            </Styled.StyledCol>
          </Styled.Franchise>

          <Styled.StyledHeading>
            Recommended for you
          </Styled.StyledHeading>

          <Styled.Franchise>
            <Styled.StyledCol>
              <Card />
            </Styled.StyledCol>
            <Styled.StyledCol>
              <Card />
            </Styled.StyledCol>
            <Styled.StyledCol>
              <Card />
            </Styled.StyledCol>
          </Styled.Franchise>

          <Styled.StyledHeading>
            Family
          </Styled.StyledHeading>

          <Styled.Franchise>
            <Styled.StyledCol>
              <Card />
            </Styled.StyledCol>
            <Styled.StyledCol>
              <Card />
            </Styled.StyledCol>
            <Styled.StyledCol>
              <Card />
            </Styled.StyledCol>
          </Styled.Franchise>

          
          <Styled.StyledHeading>
            Classic
          </Styled.StyledHeading>

          <Styled.Franchise>
            <Styled.StyledCol>
              <Card />
            </Styled.StyledCol>
            <Styled.StyledCol>
              <Card />
            </Styled.StyledCol>
            <Styled.StyledCol>
              <Card />
            </Styled.StyledCol>
          </Styled.Franchise>

          <Styled.StyledHeading>
            Marvel
          </Styled.StyledHeading>

          <Styled.Franchise>
            <Styled.StyledCol>
              <Card />
            </Styled.StyledCol>
            <Styled.StyledCol>
              <Card />
            </Styled.StyledCol>
            <Styled.StyledCol>
              <Card />
            </Styled.StyledCol>
          </Styled.Franchise>

        </Container>
    </Layout>
  );
};

export default PanelForm;

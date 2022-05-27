import React from 'react';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileImage = styled.img`
  width: 100%;
  margin-bottom: 0px;
`;

export const ProfileName = styled.h2`
  margin-top: -50px;
`;

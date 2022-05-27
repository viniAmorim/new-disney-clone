import React, { BaseHTMLAttributes } from 'react';

import * as Styled from './styles';

export interface ProfileProps extends BaseHTMLAttributes<HTMLDivElement> {
  /**
   * Profile Image
   */
  src: string;
  /**
   * Profile name
   */
  name: string;
}

const Profile = ({ src, name, ...rest }: ProfileProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Profile {...rest}>
        <Styled.ProfileImage src={src} />
      </Styled.Profile>
      <Styled.ProfileName>{name}</Styled.ProfileName>
    </Styled.Wrapper>
  );
};

export default Profile;

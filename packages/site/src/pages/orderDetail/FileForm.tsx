import React from 'react';

import { Button } from '@site/uikit';

import * as Styled from './styles';

interface FileFormProps {
  onSaveFile: (value: string) => void;
}

const FileForm = ({ onSaveFile }: FileFormProps) => {
  return (
    <Styled.ObsContainer>
      oi
      <Styled.ObsButtonContainer>
        <Button size="small">Salvar</Button>
      </Styled.ObsButtonContainer>
    </Styled.ObsContainer>
  );
};

export default FileForm;

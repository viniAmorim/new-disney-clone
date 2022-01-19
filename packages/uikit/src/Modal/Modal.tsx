import React, {
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useState,
} from 'react';
import ReactModal from 'react-modal';

import { useTheme } from 'styled-components';

import { Button } from '~/Button/styles';
import { Heading } from '~/Heading/styles';

import * as Styled from './styles';

export interface ModalProps extends Omit<ReactModal.Props, 'isOpen'> {
  /**
   * modal title
   */
  title: string;

  /**
   * button label
   */
  label: string;

  /**
   * Modal content.
   */
  children: ReactNode;

  /**
   * app element id
   */
  appElement: string | HTMLElement;

  /**
   * modal width
   */
  width?: number;

  /**
   * modal min height
   */
  minHeight?: number;

  /**
   * on request open
   */
  onRequestOpen?: () => void;
}

const Modal = forwardRef<any, ModalProps>(
  (
    {
      children,
      label,
      title,
      appElement,
      width,
      minHeight,
      onRequestOpen,
      ...rest
    }: ModalProps,
    ref,
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const theme: any = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
      setIsOpen(true);

      if (onRequestOpen) {
        onRequestOpen();
      }
    }

    function handleCloseModal() {
      setIsOpen(false);
    }

    ReactModal.setAppElement(appElement);

    useImperativeHandle(ref, () => ({
      closeModal() {
        setIsOpen(false);
      },
    }));

    return (
      <>
        <Button onClick={handleOpenModal}>{label}</Button>
        <ReactModal
          isOpen={isOpen}
          onRequestClose={handleCloseModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              border: 'none',
              borderRadius: 0,
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              background: theme.colors.white,
              width: width ? `${width}px` : 'auto',
              minHeight: minHeight ? `${minHeight}px` : 'auto',
            },
          }}
          {...rest}
        >
          <Styled.HeadingContainer>
            <Heading size="headline">{title}</Heading>
          </Styled.HeadingContainer>
          {children}
        </ReactModal>
      </>
    );
  },
);

export default Modal;

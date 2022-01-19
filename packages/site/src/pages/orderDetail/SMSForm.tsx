import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { IconContext } from 'react-icons';
import { GrNote } from 'react-icons/gr';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Button, FormControl } from '@site/uikit';
import { format } from 'date-fns';
import { useTheme } from 'styled-components';

import { OrderCommunication } from '~/app/protocols/Order';

import * as Styled from './styles';

interface SmsFormProps {
  onSaveSms: (values: FieldValues) => void;
  communications: OrderCommunication[];
}

const SmsForm = ({ onSaveSms, communications }: SmsFormProps) => {
  const form = useForm();
  const theme: any = useTheme();

  return (
    <Styled.ObsContainer>
      <Styled.ObsButtonContainer>
        <form onSubmit={form.handleSubmit(onSaveSms)}>
          <FormControl error={form.formState.errors?.message?.message}>
            <textarea
              name="message"
              placeholder="Adicione aqui sua observação"
              rows={5}
              {...form.register('message', {
                required: true,
                minLength: {
                  value: 5,
                  message: 'Smservação é obrigatório',
                },
              })}
            />
          </FormControl>
          <Button size="small" type="submit">
            Salvar
          </Button>
        </form>
      </Styled.ObsButtonContainer>

      <VerticalTimeline layout="1-column-left">
        {communications &&
          communications.map(communication => {
            const formattedDate = format(
              new Date(communication.createdAt),
              'dd/MM/yyyy HH:mm',
            );
            return (
              <VerticalTimelineElement
                contentStyle={{
                  color: theme.colors['gray-200'],
                  boxShadow: `2px 2px 0px ${theme.colors['gray-200']}`,
                  ...theme.typography['small-light'],
                }}
                date={formattedDate}
                iconStyle={{
                  background: theme.colors.white,
                  boxShadow: 'none',
                  border: `1px solid ${theme.colors['gray-400']}`,
                }}
                icon={
                  <IconContext.Provider value={{ color: 'blue' }}>
                    <GrNote />
                  </IconContext.Provider>
                }
              >
                <p>{communication.message}</p>
              </VerticalTimelineElement>
            );
          })}
      </VerticalTimeline>
    </Styled.ObsContainer>
  );
};

export default SmsForm;

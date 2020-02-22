import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { SendIntegrationMessagesParam } from 'store/chat/type';
import { CardProps } from 'views/Chat/Side/units/Card';

interface Props {
  postMessage: (body: {
    staffId: number;
    conversationId: number;
    message: string;
    phone: string;
  }) => void;
  activeConversation: CardProps;
  postIntegrationMessages: (body: SendIntegrationMessagesParam) => void;
}

const Footer: React.FC<Props> = ({ postMessage, activeConversation, postIntegrationMessages }) => {
  const [value, setValue] = useState('');
  return (
    <Container>
      <TextField
        label="Type a message"
        variant="outlined"
        multiline
        fullWidth
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
        onKeyPress={e => {
          if (e.key === 'Enter' && e.shiftKey) {
          } else if (e.key === 'Enter') {
            e.preventDefault();
            if (!value || !activeConversation.id) {
              return;
            }
            // TODO
            postMessage({
              staffId: 3,
              conversationId: activeConversation.id,
              message: value,
              phone: activeConversation.phoneNumber
            });
            setValue('');
          }
        }}
      />
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #efefef;
  padding: 5px 10px;
`;

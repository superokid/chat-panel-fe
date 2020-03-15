import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { SendIntegrationMessagesParam } from 'store/chat/type';
import { CardProps } from 'views/Chat/Side/units/Card';
import Attachment from './Attachment';
import { PostMessageParam } from 'store/chat/action';

interface Props {
  postMessage: (body: PostMessageParam) => void;
  activeConversation: CardProps;
  postIntegrationMessages: (body: SendIntegrationMessagesParam) => void;
}

const Footer: React.FC<Props> = ({ postMessage, activeConversation, postIntegrationMessages }) => {
  const [value, setValue] = useState('');
  const handlePostMedia = (mediaId: string, fileType: string) => {
    console.log(mediaId);
    postMessage({
      conversationId: activeConversation.id,
      mediaId,
      fileType,
      phone: activeConversation.phoneNumber
    });
  };

  return (
    <Container>
      <Attachment handlePostMedia={handlePostMedia} />
      <TextField
        label="Type a message"
        variant="outlined"
        multiline
        value={value}
        style={{ width: '90%' }}
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
            postMessage({
              conversationId: activeConversation.id,
              message: value,
              fileType: 'text',
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
  flex-direction: column;
  align-items: center;
`;

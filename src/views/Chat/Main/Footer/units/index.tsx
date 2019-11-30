import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

interface Props {
  postMessage: (body: { conversationId: number; message: string }) => void;
  activeConversation: number;
}

const Footer: React.FC<Props> = ({ postMessage, activeConversation }) => {
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
            if (!value || !activeConversation) {
              return;
            }
            postMessage({
              conversationId: activeConversation,
              message: value
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

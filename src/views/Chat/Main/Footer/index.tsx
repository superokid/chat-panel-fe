import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Container>
      <TextField
        label="Type a message"
        variant="outlined"
        multiline
        fullWidth
        onKeyPress={ev => {
          if (ev.key === 'Enter' && ev.shiftKey) {
          } else if (ev.key === 'Enter') {
            ev.preventDefault();
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

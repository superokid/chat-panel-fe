import React from 'react';
import styled from 'styled-components';
import { Message as IMessage } from 'store/chat/type';
import Message from './Message';

interface Props {
  messages?: IMessage[];
}

const Content: React.FC<Props> = ({ messages }) => {
  console.log(messages);
  return (
    <Container>
      {(messages || []).map((item, i) => (
        <Message item={item} key={i} />
      ))}
    </Container>
  );
};

export default Content;

const Container = styled.div`
  flex-grow: 1;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
`;

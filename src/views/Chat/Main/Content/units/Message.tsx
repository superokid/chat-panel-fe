import React from 'react';
import styled from 'styled-components';

interface Props {
  item: {
    type: string;
    message: string;
    actime: Date;
  };
}

const Message: React.FC<Props> = ({ item }) => {
  const { type, message, actime } = item || {};
  return (
    <Container type={type}>
      <Bubble>
        <Tail />
        <Text>{message}</Text>
        {/* <Time>{actime}</Time> */}
      </Bubble>
    </Container>
  );
};

interface ContainerProps {
  type: string;
}

export default Message;

const Container = styled.div<ContainerProps>`
  position: relative;
  padding-left: 7.5%;
  padding-right: 7.5%;
  align-items: ${props => (props.type === 'in' ? 'flex-start' : 'flex-end')};
  margin-bottom: 12px;
`;

const Tail = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: -8px;
  width: 0;
  height: 0;
  border-top: 16px solid #fff;
  border-left: 16px solid transparent;
`;

const Bubble = styled.div`
  display: inline-block;
  background-color: #fff;
  position: relative;
  border-radius: 7px;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
  padding: 6px 63px 8px 9px;
`;

const Text = styled.div`
  display: inline-block;
`;

const Time = styled.div`
  position: absolute;
  right: 7px;
  bottom: 3px;
  z-index: 2;
`;

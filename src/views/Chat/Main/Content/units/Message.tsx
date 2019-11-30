import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

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
        <Time>{moment(actime).format('h:mm A')}</Time>
      </Bubble>
    </Container>
  );
};

interface TypeProps {
  type: string;
}

export default Message;

const Tail = styled.div`
  content: '';
  position: absolute;
  top: 0;
  width: 0;
  height: 0;
`;

const Bubble = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 7px;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
  padding: 6px 63px 8px 9px;
`;

const Container = styled.div<TypeProps>`
  display: flex;
  position: relative;
  padding-left: 7.5%;
  padding-right: 7.5%;
  justify-content: ${({ type }) => (type === 'in' ? 'flex-start' : 'flex-end')};
  margin-bottom: 12px;
  ${Tail} {
    ${({ type }) =>
      type === 'in'
        ? `
      left: -8px;
      border-left: 16px solid transparent;
      border-top: 16px solid #fff;
    `
        : `
      right: -8px;
      border-right: 16px solid transparent;
      border-top: 16px solid #dcf8c6;
    `}
  }
  ${Bubble} {
    background-color: ${props => (props.type === 'in' ? '#fff' : '#dcf8c6')};
  }
`;

const Text = styled.div`
  display: inline-block;
`;

const Time = styled.div`
  position: absolute;
  right: 7px;
  bottom: 3px;
  z-index: 2;
  color: rgba(0, 0, 0, 0.45);
  font-size: 11px;
  height: 15px;
  line-height: 15px;
  white-space: nowrap;
`;

import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Message as MessageProps } from 'store/chat/type';
import { ReactComponent as IconSent } from 'assets/images/status-sent.svg';
import { ReactComponent as IconDelivered } from 'assets/images/status-delivered.svg';
import Image from './Image';

interface Props {
  item: MessageProps;
}

const Message: React.FC<Props> = ({ item }) => {
  const { type, message, image, actime, status } = item || {};

  const renderStatus = () => {
    if (status === 'sent') {
      return <IconSent color="#999" />;
    }
    if (status === 'delivered') {
      return <IconDelivered color="#999" />;
    }
    if (status === 'read') {
      return <IconDelivered color="rgb(79, 195, 247)" />;
    }
    return null;
  };

  return (
    <Container type={type}>
      <Bubble>
        <Image mediaId={image} />
        <Tail />
        <Text>
          {status === 'deleted' ? <TextDeleted>This message was deleted</TextDeleted> : message}
        </Text>
        <StatusContainer>
          <Time>{moment(actime).format('h:mm A')}</Time>
          <Status status={status}>{renderStatus()}</Status>
        </StatusContainer>
      </Bubble>
    </Container>
  );
};

interface TypeProps {
  type: string;
}

interface StatusProps {
  status?: string;
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
  padding: 6px 7px 6px 9px;
`;

const Text = styled.div`
  white-space: pre-wrap;
  margin-right: 80px;
`;

const TextDeleted = styled.span`
  font-style: italic;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14.2px;
`;

const StatusContainer = styled.div`
  float: right;
  margin: -10px 0 -2px 4px;
  display: flex;
`;

const Time = styled.div`
  color: rgba(0, 0, 0, 0.45);
  font-size: 11px;
  line-height: 15px;
  white-space: nowrap;
  display: inline-block;
`;

const Status = styled.div<StatusProps>`
  margin-left: 3px;
  display: flex;
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
  ${Status} {
    ${({ type }) =>
      type === 'in' && {
        display: 'none'
      }}
  }
`;

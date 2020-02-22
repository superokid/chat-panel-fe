import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Message as IMessage } from 'store/chat/type';
import { CardProps } from 'views/Chat/Side/units/Card';
import Message from './Message';

interface Props {
  messages?: { [index: number]: IMessage[] };
  activeConversation?: CardProps;
}

const Content: React.FC<Props> = ({ messages = {}, activeConversation }) => {
  if (!activeConversation?.id) {
    return null;
  }
  return (
    <Scroller>
      <Container>
        {(messages[activeConversation.id] || []).map((item, i, arr) => (
          <div key={i}>
            {(i && moment(arr[i - 1].actime).diff(item.actime, 'days') < 0 && (
              <MessageContainer>
                <DiffDay>{moment(item.actime).calendar()}</DiffDay>
              </MessageContainer>
            )) ||
              ''}
            <Message item={item} />
          </div>
        ))}
      </Container>
    </Scroller>
  );
};

export default Content;

const Scroller = styled.div`
  overflow-y: scroll;
  height: 100vh;
  flex-direction: column-reverse;
  display: flex;
`;

const Container = styled.div`
  flex-grow: 1;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
`;

const MessageContainer = styled.div`
  display: flex;
  position: relative;
  padding-left: 7.5%;
  padding-right: 7.5%;
  justify-content: center;
  margin-bottom: 12px;
`;

const DiffDay = styled.div`
  background-color: rgba(225, 245, 254, 0.92);
  border-radius: 7.5px;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
  padding: 5px 12px 6px;
  text-align: center;
  text-shadow: 0 1px 0 hsla(0, 0%, 100%, 0.4);
  box-sizing: border-box;
  color: rgba(48, 48, 48, 0.88);
  display: inline-block;
  flex: none;
  font-size: 12.5px;
  line-height: 21px;
`;

import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Dropdown from './Dropdown';

export interface CardProps {
  name?: string;
  id: number;
  phoneNumber: string;
  unread?: number;
  actime?: Date;
  message?: string;
  image?: string;
}

interface Props {
  item: CardProps;
  active?: boolean;
  onClick: (val: CardProps) => void;
}

const Card: React.FC<Props> = ({ item, active, onClick }) => {
  const { phoneNumber, actime, message, unread } = item;
  const renderTime = () => {
    if (moment().diff(actime, 'days') === 0) {
      return <Time>{moment(actime).format('h:mm A')}</Time>;
    }
    return <Time>{moment(actime).format('L')}</Time>;
  };

  return (
    <Wrapper>
      <Container active={active} onClick={() => onClick(item)}>
        <ImgWrapper>
          <Img />
        </ImgWrapper>
        <Content unread={!!unread}>
          <Head>
            <Title>{phoneNumber}</Title>
            {renderTime()}
          </Head>
          <Body>
            {message}
            <StatusContainer>
              <div>{!!unread && <Counter>{unread}</Counter>}</div>
              <StyledDropdown />
            </StatusContainer>
          </Body>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Card;

interface ContainerProps {
  active?: boolean;
}

const Wrapper = styled.div`
  position: relative;
`;

const StyledDropdown = styled(Dropdown)`
  display: none;
`;

const StatusContainer = styled.div`
  transition: all 0.2s;
  display: flex;
`;

const Counter = styled.span`
  background-color: #06d755;
  color: #fff;
  padding: 0.2em 0.4em;
  border-radius: 1.1em;
  text-align: center;
  font-size: 12px;
`;

const Container = styled.div<ContainerProps>`
  background-color: ${props => props.active && '#e9ebeb'};
  display: flex;
  align-items: center;
  height: 72px;
  cursor: pointer;
  &:hover {
    background-color: #f4f5f5;
    ${StyledDropdown} {
      display: block;
    }
    ${StatusContainer} {
      margin-right: 2.2em;
    }
  }
`;

const ImgWrapper = styled.div`
  padding: 0 15px 0 13px;
`;

const Img = styled.img`
  overflow: hidden;
  width: 49px;
  height: 49px;
  background-size: cover;
  border-radius: 50%;
`;

interface ContentProps {
  unread: boolean;
}

const Body = styled.div`
  margin-top: 2px;
  font-size: 13px;
  line-height: 20px;
  min-height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Time = styled.div`
  margin-top: 3px;
  margin-left: 6px;

  font-size: 12px;
  font-weight: normal;
`;

const Content = styled.div<ContentProps>`
  width: 100%;
  padding-right: 1em;
  height: 100%;
  border-top: 1px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: ${props => (props.unread ? 'bold' : 'normal')};
  ${Body} {
    color: ${props => (props.unread ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)')};
  }
  ${Time} {
    color: ${props => (props.unread ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.4)')};
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div``;

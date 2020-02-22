import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Dropdown from './Dropdown';

export interface CardProps {
  name?: string;
  id: number;
  phoneNumber: string;
  actime?: Date;
  message: string;
}

interface Props {
  item: CardProps;
  active?: boolean;
  onClick: (val: CardProps) => void;
}

const Card: React.FC<Props> = ({ item, active, onClick }) => {
  const { phoneNumber, actime, message } = item;
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
        <Content>
          <Head>
            <Title>{phoneNumber}</Title>
            {renderTime()}
          </Head>
          <Body>{message}</Body>
        </Content>
      </Container>
      <StyledDropdown />
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

const Container = styled.div<ContainerProps>`
  background-color: ${props => props.active && '#e9ebeb'};
  display: flex;
  align-items: center;
  height: 72px;
  cursor: pointer;
  &:hover {
    background-color: #f4f5f5;
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

const Content = styled.div`
  width: 100%;
  padding-right: 1em;
  height: 100%;
  border-top: 1px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div``;

const Time = styled.div`
  margin-top: 3px;
  margin-left: 6px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
`;

const Body = styled.div`
  margin-top: 2px;
  font-size: 13px;
  line-height: 20px;
  min-height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

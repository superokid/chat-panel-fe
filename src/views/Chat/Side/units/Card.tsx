import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

interface Props {
  name?: string;
  id: number;
  phoneNumber: string;
  actime: Date;
  message: string;
  active?: boolean;
  onClick: (id: number) => void;
}

const Card: React.FC<Props> = ({ id, phoneNumber, actime, message, active, onClick }) => {
  const renderTime = () => {
    if (moment().diff(actime, 'days') === 0) {
      return <Time>{moment(actime).format('h:mm A')}</Time>;
    }
    return <Time>{moment(actime).format('L')}</Time>;
  };

  return (
    <Container active={active} onClick={() => onClick(id)}>
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
  );
};

export default Card;

interface ContainerProps {
  active?: boolean;
}

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
`;

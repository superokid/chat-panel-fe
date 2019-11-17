import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  time: string;
  message: string;
  active?: boolean;
}

const Card: React.FC<Props> = ({ name, time, message, active }) => {
  return (
    <Container active={active}>
      <ImgWrapper>
        <Img />
      </ImgWrapper>
      <Content>
        <Head>
          <Title>{name}</Title>
          <Time>{time}</Time>
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

import React from 'react';
import Main from './Main';
import Side from './Side';
import styled from 'styled-components';

const Chat: React.FC = () => {
  return (
    <Container>
      <GridSide>
        <Side />
      </GridSide>
      <GridMain>
        <Main />
      </GridMain>
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  display: flex;
`;

const GridSide = styled.div`
  @media screen and (max-width: 1300px) and (min-width: 1025px) {
    flex: 35%;
  }
  @media screen and (min-width: 1301px) {
    flex: 40%;
  }
`;

const GridMain = styled.div`
  @media screen and (max-width: 1300px) and (min-width: 1025px) {
    flex: 65%;
  }
  @media screen and (min-width: 1301px) {
    flex: 60%;
  }
`;

import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import imgBg from 'assets/images/bg-chat.png';

const Main: React.FC = () => {
  return (
    <Container imgBg={imgBg}>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
};

export default Main;

const Container = styled.div<any>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  &:before {
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -2;
    background-color: rgba(229, 221, 213, 1);
  }
  &:after {
    content: '';
    opacity: 0.05;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-image: url(${props => props.imgBg});
  }
`;

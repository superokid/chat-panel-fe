import React from 'react';
import styled from 'styled-components';

interface Props {}

const Content: React.FC<Props> = () => {
  return <Container>C</Container>;
};

export default Content;

const Container = styled.div`
  flex-grow: 1;
`;

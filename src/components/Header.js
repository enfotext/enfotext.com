import React from 'react';
import styled from 'styled-components';

import { red } from '../utilities/colors';

const Wrapper = styled.header`
  padding: 3em 1em 0;
  width: 100%;
  max-width: 1200px;
`;

const Title = styled.span`
  display: inline-block;
  margin: 0;
  padding: .3em .4em;
  font-size: 1.7em;
  font-weight: 500;
  background: ${red};
  color: white;
`;

const Header = () => (
  <Wrapper>
    <Title>enfotext</Title>
  </Wrapper>
);

export default Header;

import React from 'react';
import styled from 'styled-components';

import { warmBlack } from 'utilities/colors';

const Wrapper = styled.footer`
  width: 100%;
  background: ${warmBlack};
`;

const Contents = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 3em 1em;
  margin: 0 auto;
  color: white;
  font-size: .875em;
  font-weight: 300;

  a {
    color: white;
    text-decoration: none;
  }

  span {
    padding: 0 .8em;
  }
`

const Footer = () => (
  <Wrapper>
    <Contents>
      <a href='mailto:hello@enfotext.com'>hello@enfotext.com</a> <span>|</span> London, UK
    </Contents>
  </Wrapper>
);

export default Footer;

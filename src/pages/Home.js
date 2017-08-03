import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Contents = styled.div`
  max-width: 620px;
  font-size: 1.6em;
  line-height: 1.4em;
`;

const Home = () => (
  <Wrapper>
    <Contents>
      We are a digital product development company. We work with startups and
      large corporates to collaboratively create new digital products.
    </Contents>
  </Wrapper>
)

export default Home

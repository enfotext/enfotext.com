import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Contents = styled.div`
  max-width: 620px;
  font-size: 1.6em;
  line-height: 1.4em;
`;

const NotFound = () => (
  <Wrapper>
    <Contents>
      Nothing to see here :)
    </Contents>
  </Wrapper>
)

export default NotFound;

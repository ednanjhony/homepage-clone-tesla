import React from 'react';

import { Container, Header, Logo, Burguer, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <Burguer />
      </Header>

      <Footer>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">made with S2</a>
          </li>
          <li>
            <a href="#">by Ednan Jhony</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;

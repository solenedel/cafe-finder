import React from 'react';
import { StyledNav } from './components/styled-components/Nav.style';
import { GlobalStyles } from './components/styled-components/GlobalStyles.style';
import { StyledHomePage } from './components/styled-components/HomePage.style';
import { AppContainer } from './components/styled-components/AppContainer';
import { PageContainer } from './components/styled-components/PageContainer';
import { StyledFooter } from './components/styled-components/Footer.style';

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <StyledNav />
      <PageContainer>
        <StyledHomePage />
      </PageContainer>
      <StyledFooter />
    </AppContainer>
  );
}

export default App;

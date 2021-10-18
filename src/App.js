import React from 'react';
import { StyledNav } from './components/styled-components/Nav.style';
import { GlobalStyles } from './components/styled-components/GlobalStyles.style';
import { StyledHomePage } from './components/styled-components/HomePage.style';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <StyledNav />
      <StyledHomePage />
    </div>
  );
}

export default App;

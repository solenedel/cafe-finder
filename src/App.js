import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StyledNav } from './components/styled-components/Nav.style';
import { GlobalStyles } from './components/styled-components/GlobalStyles.style';
import { StyledHomePage } from './components/styled-components/HomePage.style';
import { AppContainer } from './components/styled-components/AppContainer';
import { PageContainer } from './components/styled-components/PageContainer';
import { StyledFooter } from './components/styled-components/Footer.style';
import { StyledLoginPage } from './components/styled-components/LoginPage.style';

function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <StyledNav />
        <PageContainer>
          <Switch>
            <Route exact path="/">
              <StyledHomePage />
            </Route>
            {/* <Route path="/favourites">
              <StyledFavsPage />
            </Route> */}
            <Route exact path="/login">
              <StyledLoginPage />
            </Route>
          </Switch>
        </PageContainer>
        <StyledFooter />
      </AppContainer>
    </Router>
  );
}

export default App;

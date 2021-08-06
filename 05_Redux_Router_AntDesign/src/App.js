import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { StyledLayout, StyledContainer } from "./components/Layout/Layout.styled";

import HeaderMenu from './components/HeaderMenu';

import ROUTERS_LINK from './routers';

function App() {

  return (
    <BrowserRouter>
      <StyledLayout>
        <HeaderMenu />

        <StyledContainer>
          <Switch>
            {
              ROUTERS_LINK.map(route => {
                return (
                  <Route key={route.path} exact={route.exact} path={route.path}>
                    {route.render()}
                  </Route>
                )
              })
            }
          </Switch>
        </StyledContainer>
      </StyledLayout>
    </BrowserRouter>
  );
}

export default App;

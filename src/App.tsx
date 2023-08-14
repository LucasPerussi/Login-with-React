// import { useState } from "react";

import "./App.css";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { Button } from "antd";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginRequest } from "./context/AuthProvider/util";
import { Login } from "./components/Login";

function App() {
  return (
    <>
      {/* toda aplicação e rotas ficam abaixo do authProvider porque se o user
      nao estiver logado, precisa ir pro login */}
      <AuthProvider>
        <BrowserRouter>
          {/* switch determina que só uma rota será renderizada por vez */}
          <Switch>
            <Route path="/profile">
              <ProtectedLayout>
                <h2>Olá esse é o componente profile!</h2>
              </ProtectedLayout>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

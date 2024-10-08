import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./appsRouter.jsx";


const App = () => {
return(
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}


export default App;
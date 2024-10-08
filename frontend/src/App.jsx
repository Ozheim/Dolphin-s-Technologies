import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./appsRouter.jsx";


const app = () => {
return(
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}


export default app; 
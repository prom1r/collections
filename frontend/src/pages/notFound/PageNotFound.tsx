import React from "react";
import { Helmet } from "react-helmet";

export const PageNotFound = () => {
  return (
    <div id="wrapper">
      <Helmet>
        <title>Error</title>
      </Helmet>
      <div id="info">
        <h3>This page not be found</h3>
      </div>
      <img src="https://i.imgur.com/qIufhof.png" />
    </div>
  );
};

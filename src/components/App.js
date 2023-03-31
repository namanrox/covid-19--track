import React from "react";
import Static from "./Static";
import Cases from "./Cases";
import Last from "./Last";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <>
      <React.Fragment>
        <ScrollToTop />
        <Static />
        <Cases />
        <Last />
      </React.Fragment>
    </>
  );
};

export default App;

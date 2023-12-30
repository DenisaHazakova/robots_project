import React, { Children } from "react";

const Scroll = ({ children }) => {
  //   console.log({ props });
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "500px",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;

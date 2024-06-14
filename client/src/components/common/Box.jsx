import React from "react";

// @mui :
import MBox from "@mui/material/Box";

const Box = (props) => {
  return <MBox width="100%" {...props} />;
};

export default React.memo(Box);
// Exporting the Stack component wrapped in React.memo.
// React.memo is a higher order component that prevents unnecessary re-renders of the Stack component.
// It only re-renders if its props change, optimizing performance.


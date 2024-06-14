import React from "react";

// @mui :
import Typography from "@mui/material/Typography";

const Text = (props) => {
  const { children, ...restProps } = props;
  return (
    <Typography component={"div"} {...restProps}>
      {children}
    </Typography>
  );
};

export default React.memo(Text);
// Exporting the Stack component wrapped in React.memo.
// React.memo is a higher order component that prevents unnecessary re-renders of the Stack component.
// It only re-renders if its props change, optimizing performance.

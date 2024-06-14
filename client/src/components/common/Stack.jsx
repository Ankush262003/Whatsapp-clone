import React from 'react'

// @mui :
import MStack from '@mui/material/Stack';

const Stack = (props) => {
  return <MStack {...props}/>
  
}

export default React.memo(Stack);
// Exporting the Stack component wrapped in React.memo.
// React.memo is a higher order component that prevents unnecessary re-renders of the Stack component.
// It only re-renders if its props change, optimizing performance.

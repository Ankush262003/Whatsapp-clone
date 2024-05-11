import React from "react";
import MBox  from "@mui/material/Box";

const Box = (props)=>{
    const boxStyle = {
        backgroundColor:"white",
        margin:0,
        padding:0,
        ...props,
    }

    return <MBox {...boxStyle} />
    
} 

export default React.memo(Box)
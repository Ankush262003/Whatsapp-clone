import React from "react";
import MBox  from "@mui/material/Box";

const Box = (props)=>{
    const boxStyle = {
        backgroundColor:"white",
        borderRedius:"10px",
        padding:"10px",
        ...props,
    }

    return <MBox {...boxStyle} />
    
} 

export default React.memo(Box)
import React from "react";

const Box = (props) => {
    const { size ,color } = props;

    const boxStyling = {
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        margin: "20px",
        display: "inline-block",
        
    };

    return <div style={boxStyling}></div>;
};

export default Box;
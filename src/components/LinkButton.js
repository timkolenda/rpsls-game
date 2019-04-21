import React, { Component } from "react";
//change - removed extra imports from rrd
import { Link } from "react-router-dom";

const LinkButton = ({ destination, message, action = null, customClass }) => {
    return (
        <div className={`linkButton ${customClass}`} >
            <Link className="button__target" to={destination} onClick={action} >{message || destination}</Link>
        </div>
    );
};

export default LinkButton;
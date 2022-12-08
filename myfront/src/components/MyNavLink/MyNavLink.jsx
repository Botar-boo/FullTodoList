import React from 'react';
import classes from './MyNavlink.module.css'
import {NavLink} from "react-router-dom";

const MyNavLink = ({children, ...props}) => {
    return (
        <NavLink {...props} className={classes.myNlnk}>
            {children}
        </NavLink>
    );
}

export default MyNavLink;
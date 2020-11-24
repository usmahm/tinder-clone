import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

import './Header.css'

const header = () => {
    return (
        <header className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img 
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                alt="Tinder Logo"
             />

            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
            
        </header>
    )
}

export default header
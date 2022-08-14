import React from 'react';
import {
    IconButton,
    Menu,
    MenuItem
} from '@material-ui/core';
import {
    Link
} from 'react-router-dom';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import navItems from './navItems';




const MobileNav = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const renderItems = () => {
        const rendered = navItems.map(item =>
            (<MenuItem key={item.label} onClick={handleClose} component={Link} to={item.path}>{item.label}</MenuItem>)
        );
        return rendered;
    }


    return (
        <>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
            >
                <BusinessCenterIcon fontSize='large' color='secondary' />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {renderItems()}
            </Menu>
        </>
    )
}

export default MobileNav

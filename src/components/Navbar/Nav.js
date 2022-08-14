import React from 'react';
import {
    Tabs,
    Tab
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import navItems from './navItems';
import { useLocation } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    nav: {
    },

}))

const Nav = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    //Use Location to know which Nav button to highlight
    const location = useLocation();
    const locValue = location.pathname === '/jobs' ? 1 : 0;

    const renderItems = () => {
        const rendered = navItems.map((item) => (
            <Tab key={item.label} label={item.label} component={Link} to={item.path} />
        ));
        return rendered;
    }

    return (
        <div className={classes.nav}>
            <Tabs
                value={locValue}
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="disabled tabs example"
            >
                {renderItems()}
            </Tabs>
        </div>
    )
}

export default Nav

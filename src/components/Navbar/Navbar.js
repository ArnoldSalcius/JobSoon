import React from 'react';
import {
    AppBar,
    CssBaseline,
    Typography,
    Toolbar,
    useMediaQuery

} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BusinessIcon from '@material-ui/icons/Business';
import MobileNav from './MobileNav';
import Nav from './Nav';


const useStyles = makeStyles(theme => ({
    brand: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            flexGrow: 0
        }

    },
    brandName: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1)
    },
    brandIcon: {
        fontSize: theme.typography.h2.fontSize
    },
    appBar: {
        marginBottom: theme.spacing(6)
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between'
    }

}))


const Navbar = () => {
    const theme = useTheme();

    const classes = useStyles(theme);

    const isMobile = !useMediaQuery(theme.breakpoints.up('sm'));


    return (
        <>
            <CssBaseline />
            <AppBar position='static' className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <Typography className={classes.brand} >
                        <Typography className={classes.brandName} variant='h2' component='span'>
                            JobSoon
                        </Typography>
                        <BusinessIcon className={classes.brandIcon} color='secondary' />

                    </Typography>
                    {
                        isMobile ? (
                            <MobileNav />
                        ) : <Nav />
                    }

                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar

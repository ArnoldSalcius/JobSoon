import React, { useEffect } from 'react';
import {
    Paper,
    Typography,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    root: {
        margin: '0 15%',
        padding: '3% 15%',
        textAlign: 'center',
        '&>*': {
            marginBottom: '5%'
        }
    },
    bold: {
        fontWeight: 'bold',
    }

}));

const Home = ({ theme }) => {

    const classes = useStyles(theme);
    if (window.location.pathname !== '/') {
        window.location = '/';
    }


    return (
        <div>
            <Paper elevation={2} className={classes.root}>
                <Typography variant='h1' align='center'>
                    Welcome to JobSoon!
                </Typography>
                <Typography variant='body1' align='center'>
                    JobSoon helps you keep track of the positions you applied for. Simply enter information about the position and come back later to <span className={classes.bold}> view, update or delete </span> positions you have added before!
                </Typography>
                <Button color='secondary' variant='contained' component={Link} to='/jobs'>
                    Go to Jobs
                </Button>
            </Paper>
        </div>
    )
}

export default Home

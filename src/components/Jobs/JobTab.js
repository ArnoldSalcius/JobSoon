import React from 'react';
import {
    Typography,

    Grid
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Job from './Job';



const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: 5
    },
    completed: {
        background: theme.palette.secondary.dark,
    },
    progress: {
        background: theme.palette.primary.main,
    },
    denied: {
        background: theme.palette.error.dark,
    },
    jobTitle: {
        padding: theme.spacing(1)
    }
}));


const JobTab = ({ tab, cName, jobs, handleDeleteJob, handleEditJob, handleMove }) => {
    const theme = useTheme();

    const classes = useStyles(theme);

    const renderJobs = () => {
        return jobs.map((job) => (<Job handleMove={handleMove} handleEditJob={handleEditJob} key={job.id} job={job} handleDeleteJob={handleDeleteJob} />))
    }


    return (
        <Grid className={classes.root} item xs={12} md={4} >
            <Typography align='center' variant='h3' gutterBottom className={`${classes[cName]} ${classes.jobTitle} ${classes.root}`}>
                {tab.title}
            </Typography>
            {renderJobs()}
        </Grid >

    )
};







export default JobTab;

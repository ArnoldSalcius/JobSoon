import React, { useState, useEffect } from 'react';
import {
    Grid,
    Paper,
    Typography,
    Button
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import JobTab from './JobTab';
import JobDialog from './JobDialog';
import { jobTabs } from './jobFields';
import CustomDialog from '../common/CustomDialog';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    deleteBtn: {
        background: theme.palette.error.dark,
        position: 'fixed',
        bottom: '5%',
        '&&:hover': {
            background: theme.palette.error.main
        }
    }

}));



const Jobs = () => {

    const theme = useTheme();
    const classes = useStyles(theme);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [editJob, setEditJob] = useState(null);
    const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem('jobs')) || []);

    useEffect(() => {
        localStorage.setItem('jobs', JSON.stringify(jobs));
    }, [jobs]);




    const handleAddJob = (job) => {

        const found = jobs.findIndex((el) => {
            return el.id === job.id
        });
        if (found !== -1) {
            console.log('i ran');
            const newJobs = jobs;
            newJobs[found] = job
            setJobs(newJobs);
        } else {
            setJobs([...jobs, job]);
        }
        setEditJob(null);
    }

    const deleteAllJobs = () => {
        setDeleteDialogOpen(false);
        setJobs([]);
    }

    const handleDeleteJob = (job) => {
        const newJobs = jobs.filter(el => el.id !== job.id);
        setJobs(newJobs);
    }

    const handleEditJob = (job) => {
        setDialogOpen(true);
        setEditJob(job);
    }

    const handleMove = (id, type) => {
        const newJobs = jobs.map((job) => {
            if (job.id === id) {
                job.type = type;
            }
            return job;
        });
        setJobs(newJobs);
    }



    const renderTabs = () => {
        return jobTabs.map((jobTab) => {
            const selectedJobs = jobs.filter(job => job.type === jobTab.cName);
            return <JobTab handleEditJob={handleEditJob} jobs={selectedJobs} key={jobTab.cName} tab={jobTab} cName={jobTab.cName} handleDeleteJob={handleDeleteJob} handleMove={handleMove} />
        });

    }

    return (

        <Paper className={classes.root}>
            <Typography variant='h1' gutterBottom className={classes.header}>
                <span>Your Jobs</span>
                <Button color='secondary' variant='contained' onClick={() => { setDialogOpen(true); }}>
                    Add job
                </Button>
                <JobDialog editJob={editJob} open={dialogOpen} handleAddJob={handleAddJob} handleClose={() => { setDialogOpen(false); setEditJob(null); }} />

            </Typography>

            <Grid container spacing={4} justifyContent='center' >
                {renderTabs()}
            </Grid>
            <Button
                className={classes.deleteBtn}
                variant='contained'
                onClick={() => setDeleteDialogOpen(true)}
            >
                Delete All Jobs
            </Button>

            <CustomDialog
                open={deleteDialogOpen}
                text={'Are you sure you want to delete EVERYTHING?'}
                title={'DELETE EVERYTHING !@!@!'}
                btnSubmitText={'Delete'}
                handleClose={() => setDeleteDialogOpen(false)}
                handleSubmit={deleteAllJobs}
            />

        </Paper>


    )
}

export default Jobs

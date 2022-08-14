import React from 'react';
import JobButtons from './JobButtons';
import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,

} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { formatDateTxt } from '../../utils/utils'



const useStyles = makeStyles(theme => ({

    jobButtons: {
        textAlign: 'center',
        paddingBottom: theme.spacing(2)
    },
    popper: {
        zIndex: '2'
    },
    category: {
        fontWeight: 'bold'
    },
    categoryDisabled: {
        color: theme.palette.grey[500]
    }
}));



const Job = ({ job, handleDeleteJob, handleEditJob, handleMove }) => {

    const theme = useTheme();
    const classes = useStyles(theme);



    const handleDelete = () => {
        handleDeleteJob(job)
    }

    const handleEdit = () => {
        handleEditJob(job);
    }

    const handleMoveClick = (move) => {
        handleMove(job.id, move);
    }

    return (
        <Accordion key={job.id}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant='h3'>{job.companyName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component='div' >
                    <Typography gutterBottom>
                        <span className={classes.category}>Date applied: </span>
                        {formatDateTxt(job.date)}
                    </Typography>
                    <Typography gutterBottom>
                        <span className={classes.category}>Position: </span>{job.position}
                    </Typography>
                    <Typography gutterBottom>
                        <span className={classes.category}>Stack: </span>{job.stack}
                    </Typography>
                    <Typography gutterBottom>
                        <span className={classes.category}>Description: </span>{job.description}
                    </Typography>
                    <Typography gutterBottom>
                        <span className={classes.categoryDisabled}>Resume: Upload resume coming soon ... </span>

                    </Typography>
                </Typography>
            </AccordionDetails>
            <JobButtons type={job.type} handleDelete={handleDelete} handleEdit={handleEdit} handleMove={handleMoveClick} />
        </Accordion >
    )
}

export default Job






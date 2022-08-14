import React, { useEffect, useState } from 'react';
import {
    TextField,
    Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { jobFields } from './jobFields';
import { formatDatePicker } from '../../utils/utils';
import { useReducer } from 'react';
import CustomDialog from '../common/CustomDialog';

const useStyles = makeStyles((theme) => ({

    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        '& > div': {
            width: '100%',
            fontSize: '24px',
            margin: '8px 0'
        }
    },
    field: {
        display: 'flex',
        flexWrap: 'nowrap',
        '& p': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        }
    }

}));

const initialState = jobFields.reduce((prev, cur) => ({
    ...prev,
    [cur.id]: '',
    date: formatDatePicker(Date.now()),
    id: null,
    type: null
}), {});


const reducer = (state, action) => {
    //if Initial 

    if (!action.id) {
        return {
            ...state,
            ...action
        }
    } else {
        return {
            ...action
        }
    }
}


const JobDialog = ({ handleClose, open, handleAddJob, editJob }) => {


    const theme = useTheme();
    const classes = useStyles(theme);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (editJob) {
            dispatch(editJob);
        }
    }, [editJob])

    useEffect(() => {
        if (editJob) {
            //If editing jobs validate existing fields so no error thrown
            const fields = jobFields.filter(jobField => jobField.required).reduce((acc, el) => {
                return {
                    ...acc,
                    [el.id]: editJob[el.id].length ? false : true
                }
            }, {});
            // dispatch(editJob);
            setErrors(fields)

        } else {

            dispatch(initialState);
            setErrors({});
        }
    }, [open, editJob]);



    const handleErrors = (e, field) => {
        setErrors((prev) => {
            return {
                ...prev,
                [field]: e.target.value === ''
            }
        });
    }

    const isErrors = () => {
        const required = jobFields.filter(jobField => jobField.required).map(el => el.id);
        return required.some(el => errors[el] !== false);
    }

    const handleSubmit = () => {
        if (!isErrors()) {
            handleClose();
            handleAddJob({
                ...state,
                type: state.type || 'progress',
                id: state.id || (new Date()).getTime()
            });
            dispatch(initialState);
        }

    }


    const renderFields = () => {
        return jobFields.map(jobField => (
            <div className={classes.field} key={jobField.id}>
                <TextField
                    margin="dense"
                    label={jobField.field}
                    onBlur={(e) => { return jobField.required ? handleErrors(e, jobField.id) : null; }}
                    error={errors[jobField.id] ? true : false}
                    style={{ width: '75%' }}
                    type={jobField.type}
                    defaultValue={state[jobField.id]}
                    required={jobField.required}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => {
                        dispatch({ [jobField.id]: e.target.value });

                        return jobField.required ? handleErrors(e, jobField.id) : null;

                    }}
                />
                {
                    errors[jobField.id] ? (
                        <Typography variant='subtitle2' component='p' color='error' style={{ textAlign: 'right', width: '25%' }}>
                            * field is required
                        </Typography>
                    ) : null
                }
            </div>
        ));
    }

    return (
        <CustomDialog
            open={open}
            text={'Complete the following from to add a job.'}
            title='Add Job'
            btnSubmitText={'Add'}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            maxWidth='sm'
            fullWidth
            disabled={isErrors()}
        >
            <form autoComplete='off' className={classes.form}>
                {renderFields()}
            </form>
        </CustomDialog>
    )



}

export default JobDialog

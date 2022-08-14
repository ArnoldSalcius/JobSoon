import React, { useState } from 'react';
import {
    Button,
    ButtonGroup,
    Popper,
    Grow,
    Paper,
    MenuList,
    MenuItem
} from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { jobTabs } from './jobFields';
import CustomDialog from '../common/CustomDialog';


const useStyles = makeStyles(theme => ({

    jobButtons: {
        textAlign: 'center',
        paddingBottom: theme.spacing(2)
    },
    popper: {
        zIndex: '2'
    }
}));



const JobButtons = ({ type, handleDelete, handleEdit, handleMove }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const anchorRef = React.useRef(null);
    const classes = useStyles(theme);

    const options = jobTabs.filter(jobTab => jobTab.cName !== type)
        .map(jobTab => ({
            text: `Move to ${jobTab.title}`,
            value: jobTab.cName
        }

        ));
    const firstOption = options.splice(0, 1)[0];



    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.jobButtons}>

            <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                <Button onClick={() => handleMove(firstOption.value)}>{firstOption.text}</Button>
                <Button
                    color="primary"
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.popper}>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu">
                                    {options.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            onClick={() => handleMove(option.value)}
                                        >
                                            {option.text}
                                        </MenuItem>
                                    ))}
                                    <MenuItem
                                        onClick={handleEdit}
                                    >
                                        Edit Job
                                    </MenuItem>
                                    <MenuItem
                                        onClick={(event) => { setOpen(false); setOpenDialog(true); }}
                                        style={{ color: theme.palette.error.dark }}
                                    >
                                        Delete Job

                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>


                        </Paper>
                    </Grow>
                )}
            </Popper>
            <CustomDialog
                open={openDialog}
                text={'Are you sure you want to delete?'}
                title={'Delete Warning'}
                btnSubmitText={'Delete'}
                handleClose={() => setOpenDialog(false)}
                handleSubmit={handleDelete}

            />
        </div >
    )
}


export default JobButtons;
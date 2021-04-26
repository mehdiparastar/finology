import React from 'react'
import { Avatar, Badge, Button, colors, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, TextField, Typography } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/styles';
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';

const SmallAvatar = withStyles((theme) => ({
    root: {
        width: 30,
        height: 30,
        // border: `1px solid ${theme.palette.background.paper}`,
    },
}))(Avatar);

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        padding: theme.spacing(2)
    },
    dialogTitle: {
        fontWeight: 'bold',
        color: theme.palette.topBar.main
    },
    badgeAvatarsRoot: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        width: 140,
        height: 140,
        color: colors.indigo[600],
        background: colors.lightBlue[50]
    },
    personIcon: {
        width: '50%',
        height: '50%'
    },
    editIcon: {
        color: colors.indigo[600],
    },
    iconButton: {
        background: colors.lightBlue[50]
    },
    grid: {
        '& div': {
            // width: '100%'
            alignSelf: 'stretch',
            justifyContent: 'center'
        }
    },
    typography: {
        fontWeight: 'bold',
        color: theme.palette.topBar.main
    },
    btn: {
        minWidth: 160,
        fontWeight: 'bold'
    }
}))

export default function AddPeople({ open, setOpen }) {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" PaperProps={{ classes: { root: classes.root } }}>
            <DialogTitle id="form-dialog-title"  >
                <Typography className={classes.dialogTitle} variant="h3">Add people</Typography>
            </DialogTitle>
            <DialogContent>
                <Grid container direction="column" justify="center" alignItems="center" spacing={2} className={classes.grid}>
                    <Grid item xs={12}>
                        <DialogContentText>
                            <BadgeAvatars />
                        </DialogContentText>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.typography} variant="h5">Name</Typography>
                        <TextField
                            autoFocus
                            // margin="dense"
                            placeholder="Enter name"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.typography} variant="h5">Position</Typography>
                        <TextField
                            autoFocus
                            // margin="dense"
                            placeholder="Enter position"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.typography} variant="h5">Description</Typography>
                        <TextField
                            autoFocus
                            // margin="dense"
                            placeholder="Enter description"
                            fullWidth
                            variant="outlined"
                            multiline
                            rows={10}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button className={classes.btn} onClick={handleClose} color="primary">Cancel</Button>
                <Button className={classes.btn} variant="contained" onClick={handleClose} color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    )
}

function BadgeAvatars() {
    const classes = useStyles();

    return (
        <div className={classes.badgeAvatarsRoot}>
            <Badge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                badgeContent={<SmallAvatar><IconButton className={classes.iconButton}><EditIcon className={classes.editIcon} /></IconButton></SmallAvatar>}
            >
                <Avatar className={classes.avatar}><PersonIcon className={classes.personIcon} /></Avatar>
            </Badge>
        </div>
    );
}
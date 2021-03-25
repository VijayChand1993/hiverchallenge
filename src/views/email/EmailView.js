import React, { useEffect } from 'react';
import {
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import LabelDetail from './LabelDetail';
import {
    Link as RouterLink, useHistory
} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}));

const EmailView = () => {
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token == null) {
            console.log('here')
            history.push('/')
        }
    }, [])

    return (

        <Container maxWidth="lg">
            <Grid
                container
                spacing={3}
            >
                <Grid
                    item
                    lg={4}
                    md={6}
                    xs={12}
                >
                    <Profile />
                </Grid>
                <Grid
                    item
                    lg={8}
                    md={6}
                    xs={12}
                >
                    <ProfileDetails />
                </Grid>
            </Grid>
            <LabelDetail />
        </Container>

    );
};


export default EmailView

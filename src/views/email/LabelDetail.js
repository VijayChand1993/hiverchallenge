import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
    makeStyles,
    Typography
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import axiosInstance from '../../helpers/axios';

const useStyles = makeStyles((theme) => ({
    root: {},
    importButton: {
        marginRight: theme.spacing(1)
    },
    exportButton: {
        marginRight: theme.spacing(1)
    }
}));

const LabelDetail = ({ className, ...rest }) => {
    const classes = useStyles();
    const [search, setSearch] = useState()
    const [labelDetails, setLabelDetails] = useState({})

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {

            axiosInstance.get(`hivertester2@gmail.com/labels/${search}`).then((res) => {
                console.log(res.data)
                const data = res.data
                setLabelDetails(data)
            }).catch((error) => {
                setLabelDetails({})
            })

        }
    }

    return (
        <div>
            <Box mt={3}>
                <Card>
                    <CardContent>
                        <Box maxWidth={500}>
                            <TextField
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SvgIcon
                                                fontSize="small"
                                                color="action"
                                            >
                                                <SearchIcon />
                                            </SvgIcon>
                                        </InputAdornment>
                                    )
                                }}
                                placeholder="Search label (Hit Enter to search)"
                                variant="outlined"
                                onKeyDown={handleKeyDown}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </Box>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {labelDetails.name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            ID : {labelDetails.id}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Type : {labelDetails.type}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Total Messages : {labelDetails.messagesTotal}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}

export default LabelDetail

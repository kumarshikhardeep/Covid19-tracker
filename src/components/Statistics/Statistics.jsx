import React, { useEffect, useState } from 'react';
import styles from './Statistics.module.css';
import Grid from '@mui/material/Grid';
import { Paper } from '@material-ui/core';
import Chart from '../Chart/Chart';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableContainer from "@material-ui/core/TableContainer";
import MuiTableHead from "@material-ui/core/TableHead";
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        width: "100%",
    },
});
const TableHead = withStyles((theme) => ({
    root: {
        backgroundColor: "orange"
    }
}))(MuiTableHead);

const TableHeaderCell = withStyles((theme) => ({
    root: {
        color: "white"
    }
}))(TableCell);

const Statistics = ({ data }) => {

    const classes = useStyles();
    const [positives, setPositives] = useState(data?.new_positive - data?.positive);
    const [cured, setCured] = useState(data?.new_cured - data?.cured);
    const [deaths, setDeaths] = useState(data?.new_death - data?.death);

    useEffect(() => {
        setPositives(data?.new_positive - data?.positive);
        setCured(data?.new_cured - data?.cured);
        setDeaths(data?.new_death - data?.death)
    }, [data])
    return (
        <Container className={styles.container}>
            <Grid container spacing={2} justify="center">
                <Grid item component={Paper} xs={12} sm={6} md={6} className={styles.grid}>
                    <Chart data={data} />
                </Grid>
                <Grid item component={Paper} xs={12} sm={6} md={6} className={styles.grid}>
                    <TableContainer>
                        <Table className={classes.table} >
                            <TableHead>
                                <TableRow>
                                    <TableHeaderCell>Changes Since Yesterday</TableHeaderCell>
                                    <TableHeaderCell>Count</TableHeaderCell>
                                </TableRow>
                            </TableHead>
                            <TableRow className='row-style'>
                                <TableCell variant="head">Positives</TableCell>
                                <TableCell>
                                    <Typography style={{ color: positives < 0 ? "green" : "red", fontWeight: "bold" }}>{Math.abs(positives)}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow className='row-style'>
                                <TableCell variant="head">Cured</TableCell>
                                <TableCell>
                                    <Typography style={{ color: cured >= 0 ? "green" : "red", fontWeight: "bold" }}>{Math.abs(cured)}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow className='row-style'>
                                <TableCell variant="head">Deaths</TableCell>
                                <TableCell>
                                    <Typography style={{ color: deaths <= 0 ? "green" : "red", fontWeight: "bold" }}>{Math.abs(deaths)}</Typography>
                                </TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Statistics;

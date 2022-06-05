import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards = ({ data: { confirmed, recovered, deaths } }) => {
    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Cases in India</Typography>
                        <Typography variant="h5">
                            <CountUp
                                end={confirmed}
                                duration={2}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date().toDateString()}</Typography>
                        <Typography variant="body2">Total COVID19 Confirmed Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered in India</Typography>
                        <Typography variant="h5">
                            <CountUp
                                end={recovered}
                                duration={2}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date().toDateString()}</Typography>
                        <Typography variant="body2">Recovered COVID19 cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death Toll in India</Typography>
                        <Typography variant="h5">
                            <CountUp
                                end={deaths}
                                duration={2}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date().toDateString()}</Typography>
                        <Typography variant="body2">Total COVID19 Deaths</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>)
}

export default Cards;

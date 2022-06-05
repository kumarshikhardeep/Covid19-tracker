import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data }) => {

    const barChart = (
        data ? (
            <Bar
                data={{
                    labels: ['Positive', 'Cured', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(255, 0, 0, 0.7)', 'rgba(0, 255, 0, 0.7)', 'rgba(0, 0, 0, 0.7)'],
                        data: [data?.new_positive, data?.new_cured, data?.new_death]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current State in ${data?.state_name}`, position: 'bottom' }
                }}
            />
        ) : null
    )

    return (
        <div className={styles.container}>
            {barChart}
        </div>
    )


}

export default Chart;

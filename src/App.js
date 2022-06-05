import React, { Component } from 'react';
import { Cards, Statistics, AutoComplete, Loader } from './components';
import styles from './App.module.css';
import { getCovidData } from './api';
import image from './images/image.png';
class App extends Component {

    state = {
        data: {},
        country: "India",
        global: {},
        stateMap: {},
        states: [],
        selectedSno: "1",
        isLoading: true
    }

    async componentDidMount() {
        const fetchedData = await getCovidData();
        this.setState({ data: fetchedData });
        this.setState({ global: fetchedData.pop() })
        let tempMap = {}
        let tempStates = []
        fetchedData.forEach(state => {
            if (!tempMap[state.sno]) {
                tempMap[state.sno] = state
                if (state.state_name)
                    tempStates.push({ label: state.state_name, sno: state.sno });
            }
        })
        this.setState({ stateMap: tempMap, states: tempStates })
        this.setState({ isLoading: false })
    }

    handleChange = (event, value) => {
        this.setState({ selectedSno: value.sno })
    }

    render() {
        const { data, global, stateMap, states, selectedSno, isLoading } = this.state;
        return (
            <div className={styles.container}>
                <Loader open={isLoading} />
                <img src={image} alt="CoronaVirus" className={styles.image} />
                {console.log(global, stateMap["0"], states)}
                <Cards data={{ confirmed: global.new_positive, recovered: global.new_cured, deaths: global.new_death }} />
                <AutoComplete data={states} onChange={this.handleChange} />
                <Statistics data={stateMap[selectedSno]} />
            </div>
        )
    }
}

export default App;

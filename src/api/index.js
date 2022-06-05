import axios from "axios";
const url = 'https://www.mohfw.gov.in/data/datanew.json';

export const getCovidData = async () => {
    try {
        const { data } = await axios.get(`${url}`);
        return data;
    } catch (error) {
        console.error(error);
    }
}
const API_URL = process.env.REACT_APP_API_URL;

const fetchFlights = () => fetch(API_URL).then((res) => res.json());
export { fetchFlights };

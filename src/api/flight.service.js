const API_URL = "https://api.spacexdata.com/v3/launches";

const fetchFlights = () => fetch(API_URL).then((res) => res.json());
export { fetchFlights };

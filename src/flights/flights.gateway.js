import moment from 'moment';

const baseUrl = `https://api.iev.aero/api/flights/${moment().format(
  'DD-MM-YYYY'
)}`;

const fetchFlights = () =>
  fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });

export default fetchFlights;

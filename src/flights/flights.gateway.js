import moment from 'moment';

const currentDate = moment().format('DD-MM-YYYY');

const baseUrl = `https://api.iev.aero/api/flights/${currentDate}`;

const fetchFlights = () =>
  fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });

export default fetchFlights;

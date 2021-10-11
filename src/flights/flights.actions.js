import fetchFlights from './flights.gateway';

export const GET_FLIGHTS_LIST = 'FLIGHTS/GET_FLIGHTS_LIST';

export const getFlightsList = (flightsList) => ({
  type: GET_FLIGHTS_LIST,
  payload: {
    flightsList,
  },
});

export const getFlights = () => (dispatch) => {
  fetchFlights().then((data) => {
    dispatch(getFlightsList(data.body));
  });
};

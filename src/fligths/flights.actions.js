import { fetchFlights } from './flights.gateway';
export const GET_FLIGHTS_LIST = 'FLIGHTS/GET_FLIGHTS_LIST';
export const FIND_FLIGHT = 'FLIGHTS/FIND_FLIGHT';

export const getFlightsList = (flightsList) => {
  return {
    type: GET_FLIGHTS_LIST,
    payload: {
      flightsList,
    },
  };
};

export const getFlights = () => {
  return function (dispatch) {
    fetchFlights().then((data) => {
      dispatch(getFlightsList(data.body));
    });
  };
};

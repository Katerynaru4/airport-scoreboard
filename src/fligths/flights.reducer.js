import { GET_FLIGHTS_LIST, FIND_FLIGHT } from './flights.actions';

const initialState = {
  flightsList: { departure: [], arrival: [] },
};

export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FLIGHTS_LIST:
      return {
        ...state,
        flightsList: action.payload.flightsList,
      };
    default:
      return state;
  }
  
};

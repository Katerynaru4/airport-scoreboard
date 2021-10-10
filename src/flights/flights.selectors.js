import { createSelector } from 'reselect';

export const getFlightsSelector = state => state.flights.flightsList

export const getDeparturesFlightsSelector = createSelector(
  [getFlightsSelector],
  (flightsList) => flightsList.departure
);

export const getArrivalsFlightsSelector = createSelector(
  [getFlightsSelector],
  (flightsList) => flightsList.arrival
);



import { useLocation } from 'react-router-dom';

export const useQuery = () => new URLSearchParams(useLocation().search);

export const getSearchingFlight = (flights, flightCode) =>
  flights.find((flight) => flight.codeShareData[0].codeShare === flightCode);

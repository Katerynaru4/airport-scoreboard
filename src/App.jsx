import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Flights from './flights/components/Flights.jsx';

const App = () => (
  <Provider store={store}>
    <Flights />
  </Provider>
);

export default App;

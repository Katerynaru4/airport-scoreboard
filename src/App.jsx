import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import Flights from './fligths/components/Flights.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <Flights />
    </Provider>
  );
};

export default App;

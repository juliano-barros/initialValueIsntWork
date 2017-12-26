import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import Hello from './Hello';
import ProfileIndex from './FormProfile';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './index_reducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div >
      <h2>This form should be loaded with default values on fields</h2>
      <ProfileIndex />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));

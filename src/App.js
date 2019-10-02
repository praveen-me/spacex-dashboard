import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import * as json from './data.json';
import { getInitialData } from './store/actions/actions.js';
import Dashboard from './components/Dashboard.js';

// Card types
// cover
// container
// large
// large-overlay

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialData(json))
      .then(() => setIsLoading(false))
  }, [dispatch]);
  
  return isLoading ? <p>isLoading...</p> : 
  <div className="wrapper">
    <Dashboard/>
  </div>  ;
}

export default App;

import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import * as json from './data.json';
import Section from './components/Section';
import { getInitialData } from './store/actions/actions.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialData(json))
      .then(() => setIsLoading(false))
  }, [dispatch]);
  
  return (  
      isLoading ? <p>isLoading...</p> : (
        <div className="App">
      {/* {
        sections !== null && sections.map((section, index) => (
          <Section section={section} key={index}/>
        ))
      } */}
    </div>
      )
  );
}

export default App;

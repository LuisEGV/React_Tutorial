import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce
// HTML
const App = () => {
  return <div>'dbay: Shimo-san is the best!'</div>;
}


// Take this component genrerated and put in in the page
//Show it on the page
ReactDOM.render(<App />, document.querySelector('.container') );

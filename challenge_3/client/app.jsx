import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Form F1 fields={'name', 'email', 'password'}/>
        <Form F2 fields={'line1', 'line2', 'city', 'state', 'zipcode', 'phone'}/>
        <Form F3 fields={'ccNumber', 'expirationDate', 'cvv', 'billingZipcode'}/>
      </div>
    );
  }
}

var Button = (props) => {

};

var Field = (props) => {

};


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

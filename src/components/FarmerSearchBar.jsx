import React from 'react';
import '../App.css';
import SelectUSState from 'react-select-us-states';


class App extends React.Component {
 
    constructor(props) {
      super(props);
   
      this.setNewValue = this.setNewValue.bind(this);
    }
   
    setNewValue(newValue) {
      console.log('this is the State code:' + newValue);
    }
   
    render() {
      return (
        <p>
          <SelectUSState id="selectState" className="select-box" onChange={this.setNewValue}/>
        </p>
      );
    }
  }
   
  export default App;
   
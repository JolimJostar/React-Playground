import React, { Component } from 'react';
import ButtonCount from './button'

class AllButtons extends Component {
    constructor(props) {
        super(props);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.state = { number: 0 }
    }

    handleNumberChange(e){
        this.setState({ number: parseInt(e.target.value) + 1})
    }

    render() { 
        return ( 
            <ButtonCount count={this.state.number} handleNumberChange={this.handleNumberChange}/>
         );
    }
}
 
export default AllButtons;
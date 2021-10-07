import React, { Component } from 'react';


class ButtonCount extends Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 }
    }

    IncreaseCount = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    render() { 
        return ( 
            <button onClick={this.IncreaseCount}>
                {this.state.number}
            </button>
         );
    }
}
 
export default ButtonCount;
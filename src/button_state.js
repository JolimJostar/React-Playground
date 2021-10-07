import React, { Component } from 'react';

class ButtonState extends Component {
    constructor(props) {
        super(props);
        this.state = { switch: true }
    }

    changeState = () => {
        this.setState( prevState => ({
            switch: !prevState.switch
        }));
    }

    render() { 
        return ( 
            <button onClick={this.changeState}>
                {this.state.switch ? "ON" : "OFF"}
            </button>
         );
    }
}
 
export default ButtonState;
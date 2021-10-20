import React, { Component } from 'react';

class ActivateNukes extends Component {

    activateNukes() {
        alert('wow, you just killed, like, many ppl');
    }
    
    dontActivateNukes() {
        alert('Do you think you are good person or smth?');
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1>
                    ActivateNukes?
                </h1>
                <button className='btn btn-danger m-3' onClick={this.activateNukes}>
                    YES
                </button>
                <button className='btn btn-success m-3' onClick={this.dontActivateNukes}>
                    Hah
                </button>
            </React.Fragment>
         );
    }
}
 
export default ActivateNukes;
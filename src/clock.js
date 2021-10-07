import React, { Component } from 'react'


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }


    tick() {
        this.setState({
            date: new Date()
        })
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }


    render() { 
        return ( 
            <React.Fragment>
                <h1>This is timer</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </React.Fragment>
         );
    }
}
 
export default Clock;
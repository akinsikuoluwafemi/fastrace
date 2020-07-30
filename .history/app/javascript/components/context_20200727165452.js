import React, { Component } from 'react';
import axios from 'axios';


const RiderContext = React.createContext()


class RiderProvider extends Component {
      state = {
          riders: [],
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/riders')
            .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        
    }
   

    render(){
        return (
            <RiderContext.Provider value={{...this.state}}>
                {this.props.children}
            </RiderContext.Provider>
        )
    }
}

const RiderConsumer = RiderContext.Consumer

export {RiderProvider, RiderConsumer, RiderContext}
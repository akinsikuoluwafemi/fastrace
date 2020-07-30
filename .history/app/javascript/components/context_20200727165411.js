import React, { Component } from 'react';
import axios from 'axios';


const RiderContext = React.createContext()


class RiderProvider extends Component {
      state = {
          riders: [],
    }

    componentDidMount() {
        fetch('api/v1/riders')
        .then(response => response.json())
        
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
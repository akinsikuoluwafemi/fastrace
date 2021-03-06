import React, { Component } from 'react';
import axios from 'axios';


const RiderContext = React.createContext()


class RiderProvider extends Component {
      state = {
          riders: [],
    }

    componentDidMount() {
        axios.get('api/v1/riders')
        
        
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
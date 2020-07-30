import React, { Component } from 'react';
import axios from 'axios';


const RiderContext = React.createContext()


class RiderProvider extends Component {
      state = {
          riders: [],
    }

    componentDidMount() {
        axios.get('/api/riders/index')
        .then(response => {
            this.setState({ riders: response.data.riders })
        })
         conso
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
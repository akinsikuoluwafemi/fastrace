import React, { Component } from 'react';
import axios from 'axios';


const RiderContext = React.createContext()


class RiderProvider extends Component {
      state = {
          riders: [],
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/v1/riders.json')
        .then(response => {
            console.log(response)
            this.setState({ riders: response.data.riders })
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
import React, { Component } from 'react';


const RiderContext = React.createContext()


class RiderProvider extends Component {
      state = {
          riders: [],

          
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/riders')
            .then(response => response.json())
        .then(riders => {
            this.setState({riders})
        })
        .catch(error => console.log(error))
        
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
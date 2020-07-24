import React, {Component} from 'react'


const RiderContext = React.createContext()


class RiderProvider extends Component {
    
   

    render(){
        console.log(this.state.ridersLocation)
        return (
            <RiderContext.Provider value="helloworld"}>
                {this.props.children}
            </RiderContext.Provider>
        )
    }
}

const RiderConsumer = RiderContext.Consumer

export {RiderProvider, RiderConsumer, RiderContext}
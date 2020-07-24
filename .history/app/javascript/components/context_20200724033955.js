import React, {Component} from 'react'


const RiderContext = React.createContext()


class RiderProvider extends Component {
    state = {

    }

    render(){
        return (
            <RiderContext.Provider value="hello">

                {this.props.children}

            </RiderContext.Provider>
        )
    }
}

const RiderConsumer = RiderContext.Consumer

export {Rider}
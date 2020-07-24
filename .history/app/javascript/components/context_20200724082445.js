import React, {Component} from 'react'


const RiderContext = React.createContext()


class RiderProvider extends Component {
    state = {
        ridersLocation: []
    }

    componentDidMount()
    {
        axios.get('/api/riders')
            .then(response =>
            {
                this.setState({ ridersLocation: response.data.riders })
            })
    }
   

    render(){
        return (
            <RiderContext.Provider value={"helloworld"}>
                {this.props.children}
            </RiderContext.Provider>
        )
    }
}

const RiderConsumer = RiderContext.Consumer

export {RiderProvider, RiderConsumer, RiderContext}
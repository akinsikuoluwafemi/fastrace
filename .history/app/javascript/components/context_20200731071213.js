import React, { Component } from 'react';


const RiderContext = React.createContext()


class RiderProvider extends Component
{
    state = {
        riders: []
        

    }

    componentDidMount()
    {
        fetch('http://localhost:3000/api/v1/riders')
            .then(response => response.json())
            .then(riders =>
            {
                this.setState({ riders })
            })
            .catch(error => console.log(error))

        

    }







    render(){
        let srcPath;
        const getUrl = (array) =>{
            let picArray = array.map(pic => {
                srcPath = `https://farm${pic.farm}staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
                return (
                    <img alt="" src={srcPath}/>

                )
            })
            return picArray;
        }



        return (
            <RiderContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </RiderContext.Provider>
        )
    }
}

const RiderConsumer = RiderContext.Consumer

export { RiderProvider, RiderConsumer, RiderContext }
import React, { Component } from 'react';


const RiderContext = React.createContext()


class RiderProvider extends Component {
      state = {
          riders: [],
          pictures: [],
          query: 'babies',
          perPage: 10,
            page: 1

    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/riders')
            .then(response => response.json())
        .then(riders => {
            this.setState({riders})
        })
        .catch(error => console.log(error))
     
        const flickrapikey = '162e01778853d65e29516a0b540192d9';
        const flickrsecret = 'fd337bc310818cbb'
        let {}
        
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrapikey + `&tags=${this.state.query}&per_page=${this.state.perPage}&page=${this.state.page}&format=json&nojsoncallback=1`)
            .then(response => response.json())
            .then((data) => {
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
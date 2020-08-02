import React, { Component } from 'react';


const RiderContext = React.createContext()


class RiderProvider extends Component
{
    state = {
        riders: [],
        pictures: [],
        query: 'babies',
        perPage: 10,
        page: 1,
        totalPages: null

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

        const flickrapikey = '162e01778853d65e29516a0b540192d9';
        const flickrsecret = 'fd337bc310818cbb'
        let { query, perPage, page, pictures, totalPages } = this.state;

        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrapikey}&tags=${query}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`)
            .then(response => response.json())
            .then((data) =>
            {
                let pics = data.photos;
                let { pages, photo } = pics;
                this.setState({
                    totalPages: pages,
                    pictures: photo

                })

            })

    }







    render(){

        const getUrl = (array) =>{
            let picArray = array.map(pic => {
                let srcPath = `https://farm${pic.farm}staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`
                
            })
        }

        getUrl(this.state.pictures)

        return (
            <RiderContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </RiderContext.Provider>
        )
    }
}

const RiderConsumer = RiderContext.Consumer

export { RiderProvider, RiderConsumer, RiderContext }
import React, {Component} from 'react'

export default class ImageCard extends Component {
   constructor
   
    render()
    {
        const {src} = this.props
        return (
            <div>
                <img alt={src} src={src}/>
            </div>
        )
   }
}

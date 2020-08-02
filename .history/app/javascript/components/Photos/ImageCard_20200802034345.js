import React, {Component} from 'react'

export default class ImageCard extends Component {
    render(){
        const {src} = this.props
        return (
            <div>
                <img alt={src} src={src}/>
            </div>
        )
   }
}

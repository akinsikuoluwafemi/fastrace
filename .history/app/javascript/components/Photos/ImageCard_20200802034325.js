import React, {Component} from 'react'

export default class ImageCard extends Component {
    render(){
        const {src} = this.props.
        return (
            <div>
                <img alt={this.props.src} src={this.props.src}/>
            </div>
        )
   }
}

import React, {Component} from 'react'

export default class ImageCard extends Component {
    render(){
        return (
            <div>
                <img alt={this.props.src} src={this.props.src}/>
            </div>
        )
   }
}

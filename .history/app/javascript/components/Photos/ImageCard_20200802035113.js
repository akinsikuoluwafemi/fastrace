import React, {Component} from 'react'

export default class ImageCard extends Component {
   constructor(props){
       
   }
   
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

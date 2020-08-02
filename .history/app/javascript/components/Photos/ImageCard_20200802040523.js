import React, {Component} from 'react'

export default class ImageCard extends Component {
   constructor(props){
       super(props)

       this.imageRef = React.createRef()
   }
   
    componentDidMount() {
        console.log(this.imageRef.current.clientHeight)
        console.log(this.imageRef)

    }
    
    
    render()
    {
        const {src} = this.props
        return (
            <div>
                <img ref={this.imageRef} alt={src} src={src}/>
            </div>
        )
   }
}

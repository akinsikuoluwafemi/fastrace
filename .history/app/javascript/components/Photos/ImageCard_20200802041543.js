import React, {Component} from 'react'

export default class ImageCard extends Component {
   constructor(props){
       super(props)

       this.imageRef = React.createRef()
   }
   
    componentDidMount() {
        
        this.imageRef.current.addEventListener('load', this.setSpans)

    }
    
    setSpans = () => {
        console.log(this.image)
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

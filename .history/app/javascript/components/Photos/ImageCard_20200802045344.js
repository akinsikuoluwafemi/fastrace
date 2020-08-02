import React, {Component} from 'react'

export default class ImageCard extends Component {
   constructor(props){
       super(props)

       this.state = {spans: 0}

       this.imageRef = React.createRef()
   }
   
    componentDidMount() {
        
        this.imageRef.current.addEventListener('load', this.setSpans)

    }
    
    setSpans = () => {
        const height = this.imageRef.current.clientHeight

        const spans = Math.ceil(height / 10)

        this.setState({spans})

    }
    
    render()
    {
        const {src} = this.props
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={src} src={src} />
                <p></p>
            </div>
        )
   }
}

import React, { Component } from 'react'


//example of how to set up one effect only one time with Class components
//we can mimic the ComponentDidMount in hook by simply passing in an empty array as a second parameter to the function useEffect (look EffectOnlyOneHook file)
class EffectOnlyOnceClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:0,
             y:0
        }
    }
    componentDidMount (){
        window.addEventListener('mousemove', this.logMousePosition)
    }
    logMousePosition =e=>{
        this.setState({x:e.clientX, y:e.clientY})
    }
    
    render() {
        return (
            <div>
                X: {this.state.x}
                <br/>
                Y: {this.state.y}
            </div>
        )
    }
}

export default EffectOnlyOnceClass


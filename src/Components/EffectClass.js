import React, { Component } from 'react'

export class EffectClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    //2 functions below are to show the 'click ..times' in the tab of the browser
    componentDidMount() {
        document.title =`Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps,prevState){
        document.title =`Clicked ${this.state.count} times`
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>this.setState({
                    count:this.state.count +1
                })}>Click {this.state.count}</button>
            </div>
        )
    }
}

export default EffectClass

import React, { Component } from 'react'

export class EffectClass2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             name: ''
        }
    }
    //2 functions below are to show the 'click ..times' in the tab of the browser
    componentDidMount() {
        document.title =`Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            console.log('updating the document title') // if there is no if-condition, this will log when the input field of 'name' is updated and when the button is clicked
            document.title =`Clicked ${this.state.count} times`
        }
    }
    
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(e)=>this.setState({
                    name:e.target.value
                })}/>

                <button onClick={()=>this.setState({
                    count:this.state.count +1
                })}>Click {this.state.count}</button>
            </div>
        )
    }
}

export default EffectClass2

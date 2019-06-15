import React from 'react';

class CounterButton extends React.Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    // use it carefully
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.state.count!==nextState.count){
            return true;
        }else {
            return false;
        }
    }

    updateCount = ()=>{
        const count =this.state.count+1;
        //this.setState({count:count})
        this.setState(state=>{
           return {count:count}
        });
    }

    render() {
        console.log('count button');
        return (
            <button color={this.props.color} onClick={this.updateCount}>
                Count:{this.state.count}
            </button>


        );
    }
}

export default CounterButton;
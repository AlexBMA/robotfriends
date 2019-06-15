import React from 'react';
import CounterButton from '../counterButton/CounterButton'

class Header extends React.Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        console.log('header');
        return (
            <div>
                <h1 className="f1 light-green">RobotFriends</h1>
                <CounterButton color={'red'}/>
            </div>
            );
    }
}

export default Header;
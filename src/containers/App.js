import React,{Component} from 'react'
import {connect} from 'react-redux'
import CardList from '../components/CardList/CardList'
import SearchBox from '../components/SearchBox/SearchBox'
import Scroll from '../components/Scroll/Scroll'
import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry'
import './App.css'

import {setSearchField} from "../actions/actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange:(event)=> dispatch(setSearchField(event.target.value))
    }
}

class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[]
        }
    }

    componentDidMount(){
        //console.log(this.props.store);
        //console.log(this.props.store.getState());
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())   
        .then(users=> this.setState({robots:users})
        ); 
    }

    render () {
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filterRobots = robots.filter(item=>{
            return item.name.toLowerCase().includes(searchField.toLowerCase());
         });
         return !robots.length ?
             <h1>Loading</h1> :
         (   
            <div className="tc ">
                <h1 className="f1 light-green">RobotFriends</h1>     
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>    
         )
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);
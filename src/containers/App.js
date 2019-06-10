import React,{Component} from 'react'
import {connect} from 'react-redux'
import CardList from '../components/CardList/CardList'
import SearchBox from '../components/SearchBox/SearchBox'
import Scroll from '../components/Scroll/Scroll'
import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry'
import './App.css'

import {setSearchField,requestRobots} from "../actions/actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error

    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange:(event)=> dispatch(setSearchField(event.target.value)),
        onRequestRobots:()=>dispatch(requestRobots())
    }
}

class App extends Component{


    componentDidMount(){
       this.props.onRequestRobots()
    }

    render () {

        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filterRobots = robots.filter(item=>{
            return item.name.toLowerCase().includes(searchField.toLowerCase());
         });
         return isPending ?
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
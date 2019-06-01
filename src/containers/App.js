import React,{Component} from 'react'
import CardList from '../components/CardList/CardList'
import {robots} from '../jsonData/robots'
import SearchBox from '../components/SearchBox/SearchBox'


class App extends Component{
    
    constructor(){
        super()
        this.state={
            robots:robots,
            searchField: ''
        }
    }

    onSearchChange = (event)=>{
        this.setState({searchField:event.target.value});    
    }

    render () {
        const filterRobots = this.state.robots.filter(item=>{
            return item.name.toLowerCase().includes(this.state.searchField.toLowerCase());
         });

        return(
         <div className="tc">
            <h1>RobotFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filterRobots}/>
        </div>
        );
    }
} 

export default App;
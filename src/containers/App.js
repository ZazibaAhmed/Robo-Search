import React from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'



class App extends React.Component {
	constructor(){
		super()
		this.state={
			robots: [],
			searchField: ""
		}
	}
	componentDidMount(){
		//fetch makes a http request
		//ftech returns a response and we convert it to json
		fetch('https://jsonplaceholder.typicode.com/users')
			.then( response => response.json())
			.then( users => this.setState({robots: users}));		
	}

	onSearchChange = (event) => {
    	this.setState({searchField: event.target.value});
	}

	render() {	
		const{robots, searchField}=this.state;
		const filteredRobots=robots.filter( robot =>{
         	return robot.name.toLowerCase().includes(searchField.toLowerCase());
    	});
    	//making if statement ternary
    	if(!robots.length){ //instead of robots.length === 0
    		return <h1 className="tc">Loading...</h1>
    	}
        else{
			return (
				<div className="tc">
				   <h1>RoboFriends</h1>
				   <SearchBox searchChange={this.onSearchChange}/>
				   <Scroll>
				   	   <ErrorBoundary>
				   	    <CardList robots={filteredRobots}/>
				   	   </ErrorBoundary>
				   </Scroll>
				</div>
			);
		}
	}
}

export default App;

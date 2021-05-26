import React, { Component } from 'react';
import './App.css'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/input/input.component';
export default class App extends Component {

  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:'',
      warning:''
    }
    
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=>this.setState({monsters:users}))

  
}


  render() {
   const {monsters, searchField}=this.state;
   const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
 
  
    return (
      <div className="App">
        <h1>Monsters Roldex</h1>
        <center><SearchBox placeholder='Search monsters' handleChange={e=>{this.setState({searchField:e.target.value})}}/></center>
        <CardList monsters={filteredMonsters}/>
        <p>{this.state.warning}</p>
     </div>
    )
  }
}


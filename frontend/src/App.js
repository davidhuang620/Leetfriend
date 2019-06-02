import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Cards from './components/Cards/Cards';
import CardsList from "./components/Cards/CardsList";
import Nav from './components/Nav/Nav';
import Buttons from './components/Buttons';
import CommentsThread from './components/CommentsThread/CommentsThread';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      comments: []
    };
  }


  componentDidMount(){
    // this.setState(
    //   {
    //     comments: [{
    //       "id":2,
    //     "username":"What",
    //     "comment":"UPDATED",
    //     "createdtime":"2019-05-30T15:35:00.594Z"
    //     }]
    //   }
    // );
    
    fetch("http://localhost:3002/comments")
    .then( resp => resp.json())
    .then( data => this.setState(
        {
          comments: data
        })
      )
  }
   

  render() {
    console.log(this.state);
    return (
      <div>
         <Nav />
         <Cards />
         <CommentsThread comments = {this.state.comments}/>
         <Buttons />
      </div>
    )
  }
}

export default App;

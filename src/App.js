import './App.css';
import React, { Component } from 'react'
import NavBar from './component/NavBar';
//import NewsItem from './component/NewsItem';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  render() {
    return (
      <div>
        
       <Router>
     <NavBar/>
     <LoadingBar
     height={3}
        color='#f11946'
        progress={this.state.progress}
      />
       <Switch>
          <Route exact path="/" >
          <News setProgress={this.setProgress}  key="general" pageSize={5} country="in" category="general" apiKey={this.apiKey}/>
          </Route>
          <Route exact path="/business" >
          <News setProgress={this.setProgress}  key="business" pageSize={5} country="in" category="business" apiKey={this.apiKey}/>
          </Route>
          <Route exact path="/entertainment" >
          <News setProgress={this.setProgress}  key="entertainment" pageSize={5} country="in" category="entertainment" apiKey={this.apiKey}/>
          </Route>
          <Route exact path="/general" >
          <News setProgress={this.setProgress}  key="general" pageSize={5} country="in" category="general" apiKey={this.apiKey}/>
          </Route>
          <Route exact path="/health" >
          <News setProgress={this.setProgress}  key="health" pageSize={5} country="in" category="health" apiKey={this.apiKey}/>
          </Route>
          <Route exact path="/sports" >
          <News setProgress={this.setProgress}  key="sports" pageSize={5} country="in" category="sports" apiKey={this.apiKey}/>
          </Route>
          <Route exact path="/science" >
          <News setProgress={this.setProgress}  key="science" pageSize={5} country="in" category="science"apiKey={this.apiKey}/>
          </Route>
          <Route exact path="/technology" >
          <News setProgress={this.setProgress}  key="technology" pageSize={5} country="in" category="technology"apiKey={this.apiKey}/>
          </Route>
        </Switch>
       </Router> 
      </div>
    )
  }
}


import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import youtube from '../src/apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends Component {
  state ={videos: [],
          selectedVideo: null
       };
  componentDidMount(){
    this.onTermSubmit('children')
  }

  onVideoSelect = video =>{
    this.setState({
      selectedVideo:video
    })
  }

  onTermSubmit = async term =>{
    const response= await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo:response.data.items[0]
    })
  }

  render() {
    return (
      <div  className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
            <div className="ui row">
            <div className="eleven wide column"><VideoDetail video={this.state.selectedVideo}/></div>
            <div className="five wide column"><VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/></div>
            </div> 
            </div>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './VideoItem.css'

class VideoItem extends Component {

    selectVideo = () =>{
        this.props.onVideoSelect(this.props.v)
    }

    render() {
        return (
            <div onClick={this.selectVideo} className="video-item item">
                <img alt={this.props.v.snippet.title} className="ui img" src={this.props.v.snippet.thumbnails.medium.url}/>
                <div className="content">
               <div className="header"> {this.props.v.snippet.title}</div>
                </div>
            </div>
        );
    }
}
 
export default VideoItem;
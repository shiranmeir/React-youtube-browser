import React, { Component } from 'react';
import VideoItem from './VideoItem';


class VideoList extends Component {

    render() {
        const renderedList= this.props.videos.map
        (v=> {return <VideoItem v={v} key={v.id.videoId} onVideoSelect={this.props.onVideoSelect} />})
        return (
            <div className="ui relaxed divided list">
                {renderedList}
            </div>
        );
    }
}

export default VideoList;
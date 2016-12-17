import React, { Component } from 'react';
import '../../public/assets/App.css';
import SearchBar from './search_bar';
import VideoList from './video_list'
import VideoDetail from './video_detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
const YT_TOKEN = ""; // YouTube Api Token Here

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {videos: [], selectedVideo: null};
    this.videoSearch = this.videoSearch.bind(this);
    this.selectedVideo = this.selectedVideo.bind(this);
    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({key: YT_TOKEN, term: term}, (videos) => {
      this.setState({videos: videos, selectedVideo: videos[0]});
    });
  }

  selectedVideo(selectedVideo) {
    this.setState({selectedVideo});
  }

  render() {
    const videoSearch = _.debounce(this.videoSearch, 500);

    return (
    <div>
      <SearchBar onVideoSearch={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList videos={this.state.videos} onVideoSelect={this.selectedVideo}/>
    </div>
    );
  }
}

export default App;

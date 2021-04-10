import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import VideoShow from './VideoShow/VideoShow';
import VideoList from './VideoList/VideoList';
import axios from 'axios';

function App() {

    const [searchTerm, setSearchTerm] = useState("");
    const [videoList, setVideoList] = useState([]);
    const [video, setVideo] = useState({});

    const BASE_URL = "https://www.googleapis.com/youtube/v3/search"

    useEffect(() => {
        const req = async () => {
            return await axios.get(BASE_URL, {
                params: {
                    key: "AIzaSyAC5-Muq_F29Tljl0fUHh37DQlRXSQIzxA",
                    q: searchTerm,
                    part: 'snippet',
                    maxResults: 25,
                    type: "video"
                }
            })
        }

        req().then(res => {
            setVideoList(res.data.items);
            setVideo(res.data.items[0]);
        })
        .catch(err => console.log(err));

    }, [searchTerm]);

    return (
        <div className="ui container">
            <SearchBar setSearchTerm={setSearchTerm} />
            <div className="content">
                <div className="video-show">
                    <VideoShow video={video} />
                </div>
                <div className="video-list">
                    <VideoList videoList={videoList} setVideo={setVideo}/>
                </div>
            </div>
        </div>
    );
}

export default App;
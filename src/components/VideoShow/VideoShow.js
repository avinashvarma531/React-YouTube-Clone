import React from 'react';
import './VideoShow.css'

function getDateFormat(dateTime) {
    let date = String(new Date(dateTime)).split(" ");
    date = `${date[1]} ${date[2]}, ${date[3]}`;
    return date;
}

function VideoShow({ video }) {
    
    if (video.hasOwnProperty('id')) {
        return (
            <React.Fragment>
                <div className="videoWrapper">
                    <iframe
                        src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
                        title={video.snippet.title}
                        allowFullScreen>
                    </iframe>;
                </div>
                <div className="video-header">
                    <div className="title">{video.snippet.title}</div>
                    <div className="meta">{getDateFormat(video.snippet.publishTime)}</div>
                </div>
                <div className="video-desc">
                    <div className="channel-title">{video.snippet.channelTitle}</div>
                    <div className="description">{video.snippet.description}</div>
                </div>
            </React.Fragment>
        );
    }

    return "";
}

export default VideoShow;
import React from 'react';

function VideoItem({ video, setVideo, titleOptim, get_date }) {
    return (
        <div className="video-item">
            <div className="thumbnail-container" onClick={() => setVideo(video)}>
                <img
                    className="thumbnail"
                    src={video.snippet.thumbnails.high.url}
                    width="168"
                    height="126"
                    alt={video.snippet.title}
                />
            </div>
            <div className="side-content">
                <div className="video-title" onClick={() => setVideo(video)}>{titleOptim(video.snippet.title)}</div>
                <div className="video-meta">
                    <div>{ video.snippet.channelTitle }</div>
                    <div>{ get_date(video.snippet.publishTime) }</div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
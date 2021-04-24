import React from 'react';

function VideoItem({ video, setVideo, titleOptim, get_date }) {

    const linkStyles = {
        textDecoration: "none"
    }

    return (
        <div className="video-item">
            <a href="#top" style={linkStyles}>
                <div className="thumbnail-container" onClick={() => setVideo(video)}>
                    <img
                        className="thumbnail"
                        src={video.snippet.thumbnails.high.url}
                        width="168"
                        height="126"
                        alt={video.snippet.title}
                    />
                </div>
            </a>
            <div className="side-content">
                <a href="#top" style={linkStyles}>
                    <div className="video-title" onClick={() => setVideo(video)}>{titleOptim(video.snippet.title)}</div>
                </a>
                <div className="video-meta">
                    <div>{ video.snippet.channelTitle }</div>
                    <div>{ get_date(video.snippet.publishTime) }</div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
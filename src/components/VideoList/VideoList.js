import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

function get_time(ms) {
    let context = "second";
    let time = Math.floor(ms / 1000);

    // for mins
    if (time > 59) {
        time = Math.floor(time / 60);
        context = "minute";
    }

    // for hrs
    if (time > 59) {
        time = Math.floor(time / 60);
        context = "hour";
    }

    // for days
    if (time > 23) {
        time = Math.floor(time / 24);
        context = "day";
    }

    // for weeks
    if (time > 6) {
        time = Math.floor(time / 7);
        context = "week";
    }

    // for months
    if (time > 4) {
        time = Math.floor(time / 4.34524);
        context = "month";
    }

    // for years
    if (time > 11) {
        time = Math.floor(time / 12);
        context = "year";
    }

    return [context, time];
}

function get_date(dateTime) {
    // current datetime
    const currentDate = new Date();
    // video datetime
    const videoDate = new Date(dateTime);
    
    // difference in milli secs
    const ms = currentDate - videoDate;
    
    let [context, time] = get_time(ms);

    context = time !== 1 ? context + "s" : context;

    return `${time} ${context} ago`;
}

function titleOptim(title) {
    if (title.length > 50){
        title = title.slice(0, 50) + "...";
    }

    return title;
}

function VideoList({ videoList, setVideo }) {

    let items = videoList.filter(video => video.hasOwnProperty("snippet"))

    const mappedVideos = items.map(
        video => <VideoItem
            video={video}
            key={video.id.videoId}
            setVideo={setVideo}
            titleOptim={titleOptim}
            get_date={get_date}
        />
    )

    return (
        <div className="video-list-container">
            {mappedVideos}
        </div>
    );
}

export default VideoList;
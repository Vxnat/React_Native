import VideoPlayer from "../../components/videoPlayer/videoPlayer";


const VideoScreen = ({route}) => {
    const {videoUrl} = route.params;
    return <VideoPlayer videoUrl = {videoUrl}/>
}

export default VideoScreen;
import VideoCart from "./VideoCart";

export default function VideoList({ videos }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <VideoCart key={video.videoId} video={video} />
      ))}
    </div>
  );
}

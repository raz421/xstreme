const videoFile = {
  videos: () =>
    import("../../data/videos.json").then((module) => module.default),
};
export const getVideos = async () => videoFile.videos();

import { NextResponse } from "next/server";
import videos from "../../../../data/videos.json";
export async function GET(_request, { params }) {
  const id = params.id;
  const video = videos.find((v) => v.videoId == id);
  // if () {
  //   redirect("http://localhost:3000/api/videos");
  // }
  return NextResponse.json(video);
}
export async function PATCH(request, { params }) {
  const video = await request.json();
  const id = params.id;
  const videoIndex = videos.findIndex((v) => v.videoId == id);
  videos[videoIndex].title = video.title;
  videos[videoIndex].description = video.description;
  return NextResponse.json(videos[videoIndex]);
}
export async function DELETE(_request, { params }) {
  const id = params.id;
  const videoIndex = videos.findIndex((video) => video.videoId == id);
  const deletedVideo = videos[videoIndex];
  videos.splice(deletedVideo, 1);
  return NextResponse.json(deletedVideo);
}

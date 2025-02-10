import { NextResponse } from "next/server";
import videos from "../../../../data/videos.json";
export async function GET(_request, { params }) {
  const id = params.id;
  const video = videos.find((v) => v.videoId == id);
  return NextResponse.json(video);
}

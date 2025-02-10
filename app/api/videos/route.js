import videos from "../../../data/videos.json";
export async function GET() {
  const data = videos;
  //   console.log(videos);
  return Response.json(data);
}

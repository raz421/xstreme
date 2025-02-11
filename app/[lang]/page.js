import Hero from "@/components/Hero";
import VideoList from "@/components/VideoList";
import ViewAll from "@/components/View-All";
import { getVideos } from "./videos";

export default async function Home() {
  // const dictionary = await getDictionary(lang);
  const videos = await getVideos();

  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
        <Hero />
      </main>
      <section className="mt-12">
        <ViewAll />
        <VideoList videos={videos} />
      </section>
    </>
  );
}

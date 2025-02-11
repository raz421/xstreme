import MayLike from "@/components/MayLike";
import Videodetails from "@/components/VideoDetails";

export default function VideoDynamic({ params: { videoId, lang } }) {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <Videodetails videoId={videoId} lang={lang} />
      <MayLike />
    </div>
  );
}

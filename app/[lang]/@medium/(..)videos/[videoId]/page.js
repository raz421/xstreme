import Modal from "@/components/Modal";
import Videodetails from "@/components/VideoDetails";

export default function InterceptRoute({ params: { videoId, lang } }) {
  console.log("hellow........................");
  return (
    <Modal>
      <Videodetails videoId={videoId} lang={lang} />
    </Modal>
  );
}

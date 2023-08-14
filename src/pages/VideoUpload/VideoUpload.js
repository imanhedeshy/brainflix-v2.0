import { useEffect } from "react";

import Header from "../../components/Header/Header";
import UploadForm from "../../components/UploadForm/UploadForm";

export default function Upload() {
  useEffect(() => {
    document.title = 'BrainFlix | Video Upload';
  }, []);

  return (
    <>
      <Header />
      <UploadForm />
    </>
  );
}

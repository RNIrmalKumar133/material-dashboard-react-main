import { useEffect, useState, useRef } from "react";
import WebViewer from "@pdftron/pdfjs-express-viewer";

function PDFWebViewer() {
  const document = "/files/demo.pdf";
  console.log("PDFviewer document", document);
  const containerRef = useRef(null);
  const [instance, setInstance] = useState();
  const [docLoaded, setDocLoaded] = useState(false);

  const onReady = (instance) => {
    setDocLoaded(false);
    const { Core, UI } = instance;
    Core.documentViewer.addEventListener("documentLoaded", () => {
      setDocLoaded(true);
    });
    setInstance(instance);
  };

  useEffect(() => {
    const container = containerRef.current;
    console.log("container", container);
    const loadWebViewer = async () => {
      const WebViewer = (await import("@pdftron/pdfjs-express-viewer")).default;
      if (containerRef.current) {
        WebViewer(
          {
            initialDoc: "/files/demo.pdf",
            path: "/webviewer/lib",
            licenseKey: "ZjU6H4M3GpNPiAz4oUmT",
          },
          container
        ).then((_instance) => {
          const { Core, UI } = _instance;
          UI.loadDocument(document, { filename: "myfile.pdf" });
          UI.setTheme(UI.Theme.LIGHT);
          onReady(_instance);
        });
      }
    };
    loadWebViewer();
  }, [document]);

  return (
    <div className="App">
      <div className="header">React sample</div>
      <div ref={containerRef} className="webviewer" style={{ width: "100%", height: "100vh" }} />
    </div>
  );
}

export default PDFWebViewer;

import React from 'react'
import PdfViewerComponent from './PdfViewerComponent';

const page2 = () => {
  return (
    <div className="PDF-viewer">
    <PdfViewerComponent
      document={"document1.pdf"}
    />
  </div>
  )
}
export default page2
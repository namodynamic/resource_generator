'use client';


import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const PdfGenerator = () => {
 return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PdfGenerator;

// import { useCallback, useEffect, useState } from 'react';
// import { useResizeObserver } from '@wojtekmaj/react-hooks';
// import { pdfjs, Document, Page } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';


// import type { PDFDocumentProxy } from 'pdfjs-dist';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

// const options = {
//   cMapUrl: '/cmaps/',
//   standardFontDataUrl: '/standard_fonts/',
// };

// const resizeObserverOptions = {};

// const maxWidth = 800;

// type PDFFile = string | File | null;

// export default function PdfGenerator() {
//   const [file, setFile] = useState<PDFFile>('./template.pdf');
//   const [numPages, setNumPages] = useState<number>();
//   const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
//   const [containerWidth, setContainerWidth] = useState<number>();

//   const onResize = useCallback<ResizeObserverCallback>((entries) => {
//     const [entry] = entries;

//     if (entry) {
//       setContainerWidth(entry.contentRect.width);
//     }
//   }, []);

//   useEffect(() => {
//     // Set the worker source URL when the component mounts
//     pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//       'pdfjs-dist/build/pdf.worker.min.js',
//       import.meta.url,
//     ).toString();
//   }, []);

//   useResizeObserver(containerRef, resizeObserverOptions, onResize);

//   function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
//     const { files } = event.target;

//     if (files && files[0]) {
//       setFile(files[0] || null);
//     }
//   }

//   function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
//     setNumPages(nextNumPages);
//   }

//   return (
//     <div className="Example">
//       <header>
//         <h1>react-pdf sample page</h1>
//       </header>
//       <div className="Example__container">
//         <div className="Example__container__load">
//           <label htmlFor="file">Load from file:</label>{' '}
//           <input onChange={onFileChange} type="file" />
//         </div>
//         <div className="Example__container__document" ref={setContainerRef}>
//           <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
//             {Array.from(new Array(numPages), (el, index) => (
//               <Page
//                 key={`page_${index + 1}`}
//                 pageNumber={index + 1}
//                 width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
//               />
//             ))}
//           </Document>
//         </div>
//       </div>


//     </div>
//   );
// }
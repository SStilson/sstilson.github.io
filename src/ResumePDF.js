var React = require('react');
var ReactPDF = require('react-pdf/build/entry.webpack');
var resume = require('./img/resume.pdf');
var Document = ReactPDF.Document;
var Page = ReactPDF.Page;

class ResumePDF extends React.Component {
  state = {
    pageNumber: 1,
    scale: 1.2,
  }

  render() {
    const { pageNumber, scale } = this.state;
    return (
      <div className='resume-pdf'>
        <a href='https://github.com/SStilson/sstilson.github.io/blob/master/resume.pdf'>Download</a>
        <Document
          file={resume}
        ><Page pageNumber={pageNumber} scale={scale}/>
        </Document>
      </div>
    );
  }
}
module.exports = ResumePDF;

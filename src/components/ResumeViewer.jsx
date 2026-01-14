const ResumeViewer = () => {
  return (
    <object
      data="/resume.pdf"
      type="application/pdf"
      width="100%"
      height="1000px"
    >
      <p>
        Your browser does not support PDFs.
        <a href="/resume.pdf">Download the PDF</a>.
      </p>
    </object>
  );
};

export default ResumeViewer;

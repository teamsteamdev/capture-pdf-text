/**
 * Configure PDFJS
 * @param {PDFJS} PDFJS
 * @param {Object} options
 * @param {string} options.workerUrl - URL for pdf.worker.min.js, may be in `public/` or a CDN
 * @param {number} options.verbosity - Supress console messages: Errors only, 0; Warnings, 1; Info, 5;
 */
const applyOptions = (PDFJS, options = { verbosity: 0 }) => {
  if (!options.doNotApply) {
    // Setup worker
    const version = PDFJS.version
    const workerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.js`
    PDFJS.workerSrc = options.workerUrl || workerUrl

    // Suppress console.log messages
    // 0 : Errors (default)
    // 1 : Warnings
    // 5 : Infos
    PDFJS.verbosity = options.verbosity
  }

  return PDFJS
}

export default applyOptions

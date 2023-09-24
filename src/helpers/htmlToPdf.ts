import puppeteer, { PDFOptions } from 'puppeteer';

export const DEFAULT_OPTIONS: PDFOptions    = {
    format: 'A4',
    printBackground: true,
}

 async function htmlToPdf(html: string,options: PDFOptions){
     const browser = await puppeteer.launch( {headless: 'new'}); // Launching a new browser
    const page = await browser.newPage(); // Creating a new page 
    await page.setContent(html, { waitUntil: 'domcontentloaded' });  // Setting content
    const pdfBuffer = await page.pdf(options);    // Starting content in the buffer with options

    return pdfBuffer;
}

export default htmlToPdf;
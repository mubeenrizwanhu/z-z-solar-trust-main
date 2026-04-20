const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');
const fs = require('fs');

async function createPdf() {
  const pdfDoc = await PDFDocument.create();
  pdfDoc.registerFontkit(fontkit);

  let fontDisplay, fontSans;
  try {
    const fontBoldBytes = fs.readFileSync('scratch/fonts/Outfit-Bold.ttf');
    const fontRegularBytes = fs.readFileSync('scratch/fonts/Inter-Regular.ttf');
    fontDisplay = await pdfDoc.embedFont(fontBoldBytes);
    fontSans = await pdfDoc.embedFont(fontRegularBytes);
  } catch (e) {
    console.log('Custom font embedding failed, falling back to Helvetica:', e.message);
    fontDisplay = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    fontSans = await pdfDoc.embedFont(StandardFonts.Helvetica);
  }

  const page = pdfDoc.addPage([595.28, 841.89]); 
  const { width, height } = page.getSize();

  const imagePath = 'C:\\Users\\Mubee\\.gemini\\antigravity\\brain\\0a95afea-cf55-45c3-bbc6-5bcbaf6ea817\\solar_roi_graph_1776702852944.png';
  const imageBytes = fs.readFileSync(imagePath);
  
  let image;
  try {
    image = await pdfDoc.embedPng(imageBytes);
  } catch (e) {
    image = await pdfDoc.embedJpg(imageBytes);
  }

  const margin = 60;
  const maxWidth = width - (margin * 2);
  const imgDims = image.scale(1.0);
  const scaleFactor = maxWidth / imgDims.width;
  const finalWidth = maxWidth;
  const finalHeight = imgDims.height * scaleFactor;

  // Header - Website Navy Color
  const navy = rgb(12/255, 26/255, 46/255);
  const gold = rgb(229/255, 171/255, 30/255);

  page.drawText('SOLAR ROI ANALYSIS', {
    x: margin,
    y: height - 80,
    size: 28,
    font: fontDisplay,
    color: navy,
    characterSpacing: 1,
  });

  // Gold accent bar
  page.drawRectangle({
    x: margin,
    y: height - 100,
    width: 40,
    height: 3,
    color: gold,
  });

  // Centered Image
  page.drawImage(image, {
    x: margin,
    y: (height / 2) - (finalHeight / 2) + 20,
    width: finalWidth,
    height: finalHeight,
  });

  // Refined Footer Box
  const footerY = 120;
  const footerWidth = width - (margin * 2);
  const footerHeight = 70;

  page.drawRectangle({
    x: margin,
    y: footerY,
    width: footerWidth,
    height: footerHeight,
    color: rgb(0.97, 0.98, 1.0),
    borderColor: rgb(0.9, 0.92, 0.95),
    borderWidth: 1,
    opacity: 0.8,
  });

  // Key Insight Header
  page.drawText('Key Insight:', {
    x: margin + 20,
    y: footerY + footerHeight - 25,
    size: 11,
    font: fontDisplay,
    color: gold,
  });

  // Wrapped Body Text
  const bodyText = 'After year 6, every dollar normally paid to the utility becomes wealth added back to your household.';
  const fontSize = 11;
  const words = bodyText.split(' ');
  let line = '';
  let yPos = footerY + footerHeight - 42;
  const xPos = margin + 20;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const testWidth = fontSans.widthOfTextAtSize(testLine, fontSize);
    if (testWidth > (footerWidth - 40) && n > 0) {
      page.drawText(line.trim(), { x: xPos, y: yPos, size: fontSize, font: fontSans, color: navy });
      line = words[n] + ' ';
      yPos -= 16;
    } else {
      line = testLine;
    }
  }
  page.drawText(line.trim(), { x: xPos, y: yPos, size: fontSize, font: fontSans, color: navy });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/solar-roi-report.pdf', pdfBytes);
}

createPdf().catch(err => console.log(err));

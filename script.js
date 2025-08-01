const fonts = [
  "Anton",
  "Dancing Script",
  "Pacifico",
  "Playfair Display",
  "Orbitron"
];
async function generateCertificates() {
  const category = document.getElementById("categoryInput").value;
  const certificatesDiv = document.getElementById("certificates");
  certificatesDiv.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const font = fonts[i];
    await document.fonts.load(`24px "${font}"`); // Wait for the font to load

    const canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 700;
    const ctx = canvas.getContext("2d");

    const bgImage = new Image();
    bgImage.src = `assets/bg${i + 1}.jpg`;

    bgImage.onload = () => {
      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.textAlign = "center";

      ctx.font = `40px "${font}"`;
      ctx.fillText("Certificate of Achievement", canvas.width / 2, 150);

      ctx.font = `24px "${font}"`;
      ctx.fillText("This is to certify that Mr/Ms __________", canvas.width / 2, 220);
      ctx.fillText(`has successfully completed a 3-hour boot camp in "${category}"`, canvas.width / 2, 270);
      ctx.fillText("on date __________ conducted by ABC organisation.", canvas.width / 2, 320);

      ctx.fillText("Issued Date: __________", canvas.width / 2, 390);
      ctx.fillText("Program Coordinator", canvas.width / 2, 440);

      certificatesDiv.appendChild(canvas);

      const codeBlock = document.createElement("pre");
      codeBlock.textContent = `
ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.font = "40px '${font}'";
ctx.fillText("Certificate of Achievement", canvas.width / 2, 120);
ctx.font = "24px '${font}'";
ctx.fillText("This is to certify that Mr/Ms __________", canvas.width / 2, 220);
ctx.fillText("has successfully completed a 3-hour boot camp in \\"${category}\\"", canvas.width / 2, 270);
ctx.fillText("on date __________ conducted by ABC organisation.", canvas.width / 2, 320);
ctx.fillText("Issued Date: __________", canvas.width / 2, 390);
ctx.fillText("Program Coordinator", canvas.width / 2, 590);
      `.trim();
      certificatesDiv.appendChild(codeBlock);
    };
  }
}


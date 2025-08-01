# 🎓 Certificate Generator using Canvas.js

This is a web-based **Certificate Generator** that allows users to generate **five unique certificate designs** for a given category (e.g., _"AI Bootcamp"_, _"Web Dev Workshop"_) using **HTML5 Canvas**.

The designs are rendered in-browser using **JavaScript** and **Canvas.js**, with **different fonts, backgrounds, and layouts**. Each design is displayed along with the corresponding code block so you can understand how it was created.

> ✨ This version is designed to be AI-ready. You can optionally integrate an LLM (like OpenAI) later to dynamically generate certificate content.

---

## 📸 Preview

![Preview Screenshot](assets/preview.png)  
_Example of five dynamically generated certificate designs with canvas code blocks shown below._

---

## 🚀 Features

- ✅ Input a **custom category name** (e.g., "AI Bootcamp")
- ✅ Automatically generates **5 visually distinct certificate designs**
- ✅ Different:
  - Backgrounds
  - Fonts
  - Layout styles
- ✅ Renders on **HTML5 Canvas**
- ✅ Shows **Canvas.js code block** for each design
- ✅ Responsive and clean UI
- ✅ **No backend required** (runs fully in the browser)

---

## 🧱 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript**
- **Canvas API**

---
🚀 Features
Input a category name (e.g., "AI Bootcamp").

Automatically generates five different certificate styles.

Includes unique fonts, background designs, and layout for each.

Displays the certificate on the canvas and shows the corresponding Canvas.js code.

Fully offline — No server or API needed.

📁 Setup Instructions
Clone or download the repository.

Place 5 background images named:

bg1.jpg

bg2.jpg

bg3.jpg

bg4.jpg

bg5.jpg
...into the assets/ folder.

Make sure the images are light-colored so text remains visible.

If you're using custom image names, update paths in script.js.

Open index.html in your browser:

Double-click it
OR

Use Live Server in VS Code (recommended)

🖱️ How to Use
Enter a category name (e.g., "Web Dev Bootcamp") in the input field.

Click the “Generate Certificates” button.

Five certificate designs will render with:

A clean layout

Unique fonts and backgrounds

Matching Canvas.js code shown below each certificate

📜 Certificate Content
Each certificate includes:

Heading: Certificate of Achievement

Main Text:

“This is to certify that Mr/Ms ______ has successfully completed a 3-hour boot camp in [Your Input] on date ______ conducted by ABC Organisation.”

Issued Date: Current date auto-inserted (bottom right)

Signature Block: Program Coordinator (bottom left)

💡 How to Customize
Feature	Where to Edit	Notes
Certificate Text	script.js	Look for ctx.fillText(...) lines
Font Styles	script.js	Each certificate uses a different font
Background Images	assets/	Use your own, but update names in script
Layout & Alignment	script.js	Modify ctx.fillText, textAlign, etc.
Colors	script.js	Adjust fillStyle for text color

🔧 Troubleshooting
Issue	Solution
Background not loading	Confirm path (assets/bg1.jpg, etc.) is correct
Fonts not rendering properly	Use web-safe fonts or add custom fonts via CSS
Blank canvas	Make sure background.onload fires before drawing
"Generate" button not working	Ensure browser supports HTML5 Canvas and JS is enabled

⚡ Future Enhancements
 Add name input field for personalized certificates

 Enable download as PNG feature

 Let users select a preferred design

 Integrate QR Code verification link

 Add date picker for choosing issue date

📄 License
This project is licensed under the MIT License.
Feel free to use, modify, and share it freely.

👩‍💻 Author
Anusha Raj
📬 Email: [your-email@example.com]
🌐 GitHub: https://github.com/your-username

🙌 Acknowledgements
Inspired by real-world certificate generators

Canvas API – MDN Web Docs

## 📂 Project Structure


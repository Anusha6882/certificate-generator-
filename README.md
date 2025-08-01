# 🎓 Certificate Generator (Canvas.js)

A simple web-based certificate generator that Generates certificates for a given category name using Canvas.js, powered by LLMs
- This project is a web-based Certificate Generator that allows users to input a category name and generate five unique certificate designs using Canvas.js.
- It dynamically renders professional certificates with custom backgrounds and fonts on the browser.
- Each certificate includes a downloadable preview and the corresponding Canvas.js code for transparency and customization.
- The content can (optionally) be enhanced using an LLM like OpenAI's API to generate more personalized certificate text.
 ---
 ## 📁 Folder Structure
- index.html – main webpage
- style.css – styles for layout and responsiveness
- script.js – Canvas rendering + LLM logic
- assets/ – background images for certificates

Would you like a version of this for your GitHub README with b
 ## 🚀 Features

- 🔹 User input for certificate category (e.g., "AI Bootcamp", "Web Dev Workshop")
- 🔹 Dynamic certificate rendering using **HTML5 Canvas**
- 🔹 Five different certificate styles with custom fonts and backgrounds
- 🔹 Displays corresponding Canvas.js code below each design
- 🔹 Clean, centered layout for print-ready previews
- 🔹 Fully responsive design and easy to modify
- 
## 📁 Setup Instructions

1. **Clone or download the repository**.

2. Place **5 background images** named:
   - `bg1.jpg`
   - `bg2.jpg`
   - `bg3.jpg`
   - `bg4.jpg`
   - `bg5.jpg`  
   ...into the `assets/` folder.

   > Make sure the images are light-colored so text remains visible.

3. If you're using custom image names, **update paths** in `script.js`.

4. **Open `index.html` in your browser**:
   - Double-click it  
   **OR**
   - Use **Live Server** in VS Code (recommended)

## 🖱️ How to Use

1. Enter a **category name** (e.g., "Web Dev Bootcamp") in the input field.

2. Click the **“Generate Certificates”** button.

3. Five certificate designs will render with:
   - A clean layout
   - Unique fonts and backgrounds
   - Matching Canvas.js code shown below each certificate

## 📜 Certificate Content

Each certificate includes:

- **Heading**: `Certificate of Achievement`
- **Main Text**:
  > “This is to certify that Mr/Ms ______ has successfully completed a 3-hour boot camp in [Your Input] on date ______ conducted by ABC Organisation.”
- **Issued Date**: Current date auto-inserted (bottom right)
- **Signature Block**: Program Coordinator (bottom left)

## 💡 How to Customize

| Feature              | Where to Edit   | Notes                                           |
|----------------------|-----------------|-------------------------------------------------|
| Certificate Text     | `script.js`     | Look for `ctx.fillText(...)` lines             |
| Font Styles          | `script.js`     | Each certificate uses a different font         |
| Background Images    | `assets/`       | Use your own, but update names in script       |
| Layout & Alignment   | `script.js`     | Modify `ctx.fillText`, `textAlign`, etc.       |
| Colors               | `script.js`     | Adjust `fillStyle` for text color              |

## 🧰 Tech stack
 
- HTML, CSS, JavaScript
- Canvas.js
- OpenAI GPT-4 API (optional integration)
- Google Fonts
- Responsive design

## 🔧 Troubleshooting

| Issue                          | Solution                                              |
|--------------------------------|-------------------------------------------------------|
| Background not loading         | Confirm path (`assets/bg1.jpg`, etc.) is correct     |
| Fonts not rendering properly   | Use web-safe fonts or add custom fonts via CSS       |
| Blank canvas                   | Make sure `background.onload` fires before drawing   |
| "Generate" button not working  | Ensure browser supports HTML5 Canvas and JS is enabled |
| API errors (e.g. 429)          | LLM/AI integration is optional; this version uses static content |

---
## ⚡ Future Enhancements

- [ ] Add **name input** field for personalized certificates
- [ ] Enable **download as PNG** feature
- [ ] Let users **select a preferred design**
- [ ] Integrate **QR Code** verification link
- [ ] Add **date picker** for choosing issue date

## 👩‍💻 Author

**Anusha Raj**  
📬 Email: `[your-email@example.com]`  
🌐 GitHub: `https://github.com/your-username`

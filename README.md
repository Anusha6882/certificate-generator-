# 🎓 Certificate Generator (Canvas.js)

A simple web-based certificate generator that Generate certificates for a given category name using Canvas.js, powered by LLMs
 ---
 
 ## 🚀 Features

- Input a **category name** (e.g., "AI Bootcamp").
- Automatically generates **five different certificate styles**.
- Includes unique fonts, background designs, and layout for each.
- Displays the certificate **on the canvas** and shows the corresponding **Canvas.js code**.
- works with local live server

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

## 🔧 Troubleshooting

| Issue                          | Solution                                              |
|--------------------------------|-------------------------------------------------------|
| Background not loading         | Confirm path (`assets/bg1.jpg`, etc.) is correct     |
| Fonts not rendering properly   | Use web-safe fonts or add custom fonts via CSS       |
| Blank canvas                   | Make sure `background.onload` fires before drawing   |
| "Generate" button not working  | Ensure browser supports HTML5 Canvas and JS is enabled |

## ⚡ Future Enhancements

- [ ] Add **name input** field for personalized certificates
- [ ] Enable **download as PNG** feature
- [ ] Let users **select a preferred design**
- [ ] Integrate **QR Code** verification link
- [ ] Add **date picker** for choosing issue date

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and share it freely.

## 👩‍💻 Author

**Anusha Raj**  
📬 Email: `[your-email@example.com]`  
🌐 GitHub: `https://github.com/your-username`

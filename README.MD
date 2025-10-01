# Baseline Buddy
![Baseline Buddy](https://github.com/moses-Dera/Baseline-Buddy/raw/main/images/buddy.png)

Baseline Buddy is a Visual Studio Code extension that helps web developers adopt modern web features safely.  
It integrates with the [web-features](https://www.npmjs.com/package/web-features) dataset to check if a feature is part of the **Baseline** (widely supported across major browsers).  

## ✨ Features
- **Hover Info** → Hover over JavaScript/TypeScript features to see Baseline status + docs link.  
- **Diagnostics** → Non-Baseline features get squiggly warnings in your code.  
- **Popup Suggestions** → When a feature is not in Baseline, Baseline Buddy suggests safer alternatives.  
- **Command Palette** → Run `Baseline Buddy: Check Web Feature` to manually check any feature.

## 📹 Demo
Watch the demo of Baseline Buddy in action:

[![Baseline Buddy Demo](https://github.com/moses-Dera/Baseline-Buddy/raw/main/images/buddy.png)](https://youtube.com/shorts/B8NESaa3SBI?feature=share)  
Click the image above to play the main demo video.

Additional demo video:  
[Watch on Awesome Screenshot](https://www.awesomescreenshot.com/video/44804500?key=f2630fae628ff693d2b30637a03ddc9f)

## 🚀 Usage
1. Install the extension (`.vsix` or from Marketplace).  
2. Open a JavaScript/TypeScript file.  
3. Hover over web APIs like `fetch`, `AbortController`, `ResizeObserver`.  
4. Use the Command Palette → `Baseline Buddy: Check Web Feature`.  

## 🔧 Tech Stack
- VS Code Extension API  
- web-features dataset  
- JavaScript, TypeScript  
- Node.js  

## 📝 About the Project
**Baseline Buddy** was inspired by the challenges web developers face when adopting modern web features safely. It helps identify whether a feature is fully supported across major browsers and suggests safer alternatives.  

### What I Learned
- Building a VS Code extension with hover tooltips, popup suggestions, and diagnostics.  
- Integrating external datasets like `web-features`.  
- Handling asynchronous code and editor events for live feedback.  

### How It Was Built
1. Integrated `web-features` dataset for baseline data.  
2. Added Command Palette commands for manual feature checks.  
3. Implemented hover provider for JS/TS symbols.  
4. Added squiggly warnings for non-Baseline features.  
5. Created popup suggestions for safer alternatives.  

### Challenges
- Some features lacked MDN or CanIUse links, requiring fallback logic.  
- Hover provider had to detect only relevant JS/TS symbols.  
- Mapping features like `AbortController` required careful fuzzy matching.  
- Extension packaging and Marketplace submission required attention to folder structure and `package.json`.

### Impact
Developers can instantly know whether a feature is safe, explore documentation, and get alternatives—reducing browser compatibility issues.

## 📜 License
This project is licensed under the MIT License — see [LICENSE](./LICENSE).

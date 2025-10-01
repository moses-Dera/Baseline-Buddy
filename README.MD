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

[![Baseline Buddy Demo](https://github.com/moses-Dera/Baseline-Buddy/raw/main/images/buddy.png)](https://www.awesomescreenshot.com/video/44804500?key=f2630fae628ff693d2b30637a03ddc9f)

Click the image above to play the video.

## 🚀 Usage
1. Install the extension (`.vsix`).  
2. Open a JavaScript/TypeScript file.  
3. Hover over web APIs like `fetch`, `AbortController`, `ResizeObserver`.  
4. Use the Command Palette → `Baseline Buddy: Check Web Feature`.  

## 🔧 Tech Stack
- [VS Code Extension API](https://code.visualstudio.com/api)  
- [web-features](https://github.com/web-platform-dx/web-features) dataset  

## 📜 License
This project is licensed under the MIT License — see [LICENSE](./LICENSE).

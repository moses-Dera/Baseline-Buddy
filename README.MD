# Baseline Buddy

**Baseline Buddy** is a Visual Studio Code extension that helps web developers adopt modern web features safely.  
It integrates with the [web-features](https://www.npmjs.com/package/web-features) dataset to check if a feature is part of the **Baseline** (widely supported across major browsers).

---

## ✨ Features
- **Hover Info** – Hover over JavaScript/TypeScript features to see:  
  - Feature name  
  - Baseline status: ✅ Part of Baseline, ⚠️ Limited support, ❌ Not in Baseline  
  - Docs link (MDN / CanIUse)
- **Diagnostics** – Non-Baseline features get squiggly warnings directly in your code editor.  
- **Popup Suggestions** – Alerts and suggestions for safer alternatives when a feature is not in Baseline.  
- **Command Palette** – Run `Baseline Buddy: Check Web Feature` to manually check any feature.  

---

## 💡 How it Works
1. **Hover over a feature** (e.g., `fetch`, `AbortController`) → see Baseline status and docs.  
2. **Typing a non-Baseline feature** → VS Code shows a squiggly warning.  
3. **Manual check via Command Palette** → popup with feature status and documentation.  

**Technical Details:**  
- Uses the [web-features](https://github.com/web-platform-dx/web-features) dataset to know which web APIs are widely supported.  
- VS Code **Hover Provider** API provides real-time popups.  
- VS Code **Diagnostics API** adds squiggly warnings for low-support or non-Baseline features.  

---

## 🚀 Benefits & Usefulness
- **Avoid Browser Compatibility Issues** – Know instantly if a feature is safe to use.  
- **Speeds Up Development** – No need to manually check MDN or CanIUse.  
- **Proactive Error Prevention** – Squiggly warnings reduce runtime errors.  
- **Educates Developers** – Learn which APIs are stable and which are experimental.  
- **Hackathon Ready** – Provides a clear solution for safer modern web development.




Example workflow:  
1. Hover over `fetch` → see **✅ Part of Baseline** with docs link.  
2. Hover over experimental API → see **⚠️ Limited support** or **❌ Not in Baseline**.  
3. Open Command Palette → check any feature manually.  

---

## 🔧 Installation & Usage
1. Install the extension via `.vsix` or VS Code Marketplace.  
2. Open a JavaScript or TypeScript file.  
3. Hover over web APIs like `fetch`, `AbortController`, `ResizeObserver`.  
4. Use the Command Palette → `Baseline Buddy: Check Web Feature` to manually check features.  
5. Squiggly warnings highlight features that are not part of Baseline.  

---

## 🔧 Tech Stack
- [VS Code Extension API](https://code.visualstudio.com/api)  
- [web-features](https://github.com/web-platform-dx/web-features) dataset  

---

## 📜 License
This project is licensed under the **MIT License** — see [LICENSE](./LICENSE).  

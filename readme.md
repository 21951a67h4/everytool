# Everytool.tech – AI Code Agent Instructions

## 🔍 Overview

This project hosts a collection of simple, useful web-based tools.  
Each tool has its own dedicated **URL and folder**.

Your job as an **AI Code Agent** is to generate the necessary files and structure for each new tool prompt given.

---

## 🌐 Folder Structure

Everytool.tech/
├── readme.md
└── Home-page/
    ├── landing-page/
    │   ├── index.html
    │   ├── styles.css
    │   └── script.js
    │
    ├── tools-page/
    │   ├── calculator/
    │   │   ├── age-calculator/
    │   │   │   ├── index.html
    │   │   │   ├── style.css
    │   │   │   └── script.js
    │   │
    │   ├── converter/
    │   ├── generator/
    │   └── seo/
    │
    ├── about-page/
    │   ├── about.html
    │   ├── about.css
    │   └── about.js
    │
    ├── contact-page/
    │   ├── contact.html
    │   ├── contact.css
    │   └── contact.js
    │
    └── privacy policy-page/
        ├── privacy policy.html
        ├── privacy policy.css
        └── privacy policy.js


---

## 🛠️ Tool Creation Guidelines

When a new tool is added:

- Create a new folder inside the **correct category** (`calculator/`, `converter/`, `generator/`, `seo/`).
- Folder names should be:
  - **Lowercase**
  - **Dash-separated**
  - **URL-friendly**

Inside each tool's folder, generate:

- `index.html` – Full HTML page for the tool
- `style.css` – Specific styles for the tool
- `script.js` – JavaScript logic (no external dependencies)

---

## 🔗 URL Structure

Each tool is hosted at a clean, readable URL. Examples:

| Tool Name          | URL Path                                |
|--------------------|------------------------------------------|
| Age Calculator     | `/calculator/age-calculator/`           |
| BMI Calculator     | `/calculator/bmi-calculator/`           |
| Currency Converter | `/converter/currency-converter/`        |
| QR Generator       | `/generator/qr-code-generator/`         |
| Meta Tag Generator | `/seo/meta-tag-generator/`              |

---

## 🎨 Page Design & Standards

Each tool must:

- Be **mobile responsive**
- Use basic, clean UI consistent with homepage design
- Include appropriate headings and input/output boxes
- Use proper spacing and font sizes
- Show user-friendly messages or errors when needed

Copy the **header and footer layout** from `landing-page/index.html` if needed for design consistency.

---

## 🚀 Deployment Notes

- Tools are all **static** (HTML/CSS/JS only)
- No backend or build system required
- Once tool folder is created, it's **ready to go live**
- Place under the correct subdirectory, and link it if needed from the homepage

---

## 📌 Additional Notes

- This project will scale up to **50+ tools**
- Future versions may include dynamic rendering (but not now)
- Keep code **clean, minimal, well-indented**
- JS should be vanilla (no jQuery or frameworks)

---

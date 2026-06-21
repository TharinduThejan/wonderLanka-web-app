# 🌴 LankaGuide - Local Tour & Travel Web Companion

A localized, mobile-first travel companion web application designed to help tourists navigate the beautiful landscapes, historic sites, and premium hotels of Sri Lanka. 

[cite_start]This project was built as the final practical assignment for **SENG 41293 - Mobile Web Application Development**[cite: 5].

---

## 🎨 Design & UI
The application features a custom **"Stitched Fabric" UI aesthetic**. 
Buttons, cards, and navigation elements utilize dashed borders and soft shadows to mimic tactile fabric textures. The color palette focuses heavily on natural Sri Lankan hues: lush greens, deep ocean blues, and soft sky blues to create a premium, relaxing user experience.

---

## ⚙️ Frameworks & Technologies Used

[cite_start]As per the assignment guidelines, this Single Page Application (SPA) [cite: 32] is separated into a frontend client and a backend API:

* [cite_start]**Frontend Architecture:** React.js (ES6+ JavaScript, HTML5, CSS3) [cite: 31]
* **Backend REST API:** Node.js with Express.js
* [cite_start]**Data Persistence:** Browser `LocalStorage` API [cite: 36]
* [cite_start]**Advanced Web APIs:** HTML5 Geolocation API [cite: 22]
* [cite_start]**HTTP Client:** Axios / Fetch API [cite: 37]

---

## 📱 Core & Advanced Features

* [cite_start]**Mobile-First Responsive Layout:** Fluid grid layouts and minimum 48x48px touch targets optimized exclusively for simulated smartphone viewports[cite: 33, 34].
* [cite_start]**Dynamic Data Filtering:** Users can filter the main feed of Sri Lankan attractions by categories (Hotels, Nature, Historical)[cite: 21].
* **Favorites System:** Users can bookmark specific locations. [cite_start]This data persists across browser sessions using `LocalStorage`[cite: 36].
* [cite_start]**Advanced Feature (Geolocation & Deep Linking):** The Detailed View calculates the real-time distance from the user's simulated location to the attraction and features a deep-link button to open Google Maps[cite: 22].

---

## 🌐 Browser Compatibility Notes

This application has been optimized for modern desktop web browsers simulating mobile viewports via Developer Tools (Inspect Element Mode). It is fully compatible and tested on:
* [cite_start]**Google Chrome** (Recommended for evaluation) [cite: 56]
* [cite_start]**Mozilla Firefox** [cite: 56]
* [cite_start]**Apple Safari** [cite: 56]

[cite_start]*Evaluation Note: Please use the Responsive/Device Toolbar view set to standard mobile dimensions (e.g., iPhone or Pixel viewports)[cite: 57, 58].*

---

## 🚀 Localhost Setup Instructions

[cite_start]Follow these steps to run the application locally on your machine for evaluation[cite: 59].

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your computer.

### 2. Clone the Repository
```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name

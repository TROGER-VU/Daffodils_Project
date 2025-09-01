# 🛒 Voice Shopping Assistant

A **voice-controlled shopping list app** built with **Next.js + TypeScript + Zustand**, supporting **multilingual speech recognition**, **translation to English**, **product dataset pricing**, and **smart suggestions**.

Deployed live at 👉 [https://daffodils-project.vercel.app/](https://daffodils-project.vercel.app/)

## 🔹 Brief Approach (200 words)

This project is built as a **voice shopping assistant** that combines speech recognition, natural language parsing, translation, and contextual product recommendations into a single user-friendly interface. The application listens continuously to the user’s voice commands (using the Web Speech API) and automatically converts them into structured intents such as **add, remove, modify, or search items**. To support multilingual input, every spoken command is first passed through a lightweight translation API (`google-translate-api-x`), which standardizes the text into English before parsing.

Once processed, the input is matched against a **product dataset (`products.json`)** that contains product names, categories, and prices. This ensures that items added to the shopping list reflect their real category and price instead of generic placeholders. To enhance personalization, the app also provides **three smart suggestion categories**:

* 📌 History-based items (recently purchased)
* 🔄 Alternatives (substitutes for current items)
* 🌱 Seasonal picks (based on month)

Additionally, a **Voice-Activated Search** allows users to find items under budget or from specific brands. For better UX, we integrated **React Hot Toast** for success/error feedback. The project is fully client-side, fast, and deploys seamlessly on **Vercel**.

---

## ✨ Features

* 🎙️ **Continuous Speech Recognition**
  Add, remove, search, or modify items with voice commands. Recognition runs until you press **Stop**.

* 🌍 **Multilingual Input with Translation**
  Supports multiple languages (English, Hindi, Spanish, French, etc.) using [`google-translate-api-x`](https://www.npmjs.com/package/google-translate-api-x).

* 📦 **Product Dataset with Prices**
  Items automatically fetch real prices, categories, and units from `/data/products.json`.

* 💡 **Smart Suggestions**

  * From purchase history
  * Alternatives (substitutes)
  * Seasonal picks (month-wise)

* 🔍 **Voice-Activated Search**
  Search products by voice:

  > “Find organic apples under 5 dollars”

* 📋 **Shopping Cart Management**

  * Add, remove, and update quantities
  * View total cost
  * Reset the entire list

* 🔔 **User Feedback via Toasts**

  * Add / Remove item confirmation
  * Error or not-found alerts
  * Clean, modern notifications with [React Hot Toast](https://react-hot-toast.com)

* 📊 **Top Picks Section**
  Randomized recommendations from the dataset.

* 💾 **Offline Ready**
  Works with browser storage (Zustand + localStorage).

---

## 🛠️ Tech Stack

* **Frontend:** Next.js 14, TypeScript, TailwindCSS
* **State Management:** Zustand
* **Speech Recognition:** Web Speech API (Chrome recommended)
* **Translation:** `google-translate-api-x`
* **UI Components:** `lucide-react`, TailwindCSS
* **Notifications:** React Hot Toast
* **Data:** JSON dataset (`/data/products.json`) with 20 items

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/TROGER-VU/Daffodils_Project.git
cd Daffodils_Project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧑‍💻 Usage

* Click **Start Voice** and say commands:

  * “Add 2 bananas” 🍌
  * “Remove milk” 🥛
  * “Find toothpaste under 5” 🦷
* Change language from the dropdown (Hindi, Spanish, French).
* Reset shopping list with the **Reset** button.
* See **smart suggestions** and **top picks**.

---

## 📂 Project Structure

```
/src
 ├── app/page.tsx         # Main page with voice shopping assistant
 ├── lib/nlp.ts           # Natural language parser for voice input
 ├── lib/data.ts          # Categories, substitutes, seasonal items
 ├── store/useStore.ts    # Zustand store for shopping list
 ├── pages/api/translate  # Translation API route
 └── data/products.json   # Product dataset (20 items)
```

---

## 📌 Roadmap

* [ ] Support **more languages** (auto-detect)
* [ ] Add **voice feedback** (text-to-speech)
* [ ] Export shopping list as PDF / CSV
* [ ] User accounts with cloud sync

---

## 🙌 Acknowledgements

* [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
* [google-translate-api-x](https://www.npmjs.com/package/google-translate-api-x)
* [React Hot Toast](https://react-hot-toast.com)
* [Zustand](https://github.com/pmndrs/zustand)

---

⚡ Built by Ayush Gupta — *because shopping lists should be smart, simple, and fun!*

---

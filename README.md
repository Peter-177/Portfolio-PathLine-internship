# 🚀 Portfolio Project
**Live Site: [View Portfolio](https://peter-177.github.io/Portfolio-PathLine-internship/)**

## 🛠️ Tech Stack
- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4, DaisyUI 5
- **Animations**: GSAP (GreenSock)
- **State & Data**: Redux Toolkit, TanStack Query
- **Routing**: React Router 7
- **Email**: EmailJS (Client-side)

---

## 🔑 Environment Variables
Create a `.env` file in the root with these keys:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 📂 Project Structure
```text
Portfolio/
├── public/
│   └── images/             # Project screenshots
├── src/
│   ├── assets/             # SVGs & Illustrations
│   ├── components/         # Reusable UI (Navbar, NavLinks)
│   ├── features/           # Redux Slices
│   ├── pages/              # Landing, About, Projects, Contact, Skills
│   ├── server/             # Local Express backup (not for GitHub Pages)
│   ├── App.jsx             # Main Router config
│   ├── main.jsx            # Entry point
│   ├── store.js            # Redux Store
│   └── index.css           # Tailwind & Global styles
├── .env.example            # Environment template
├── package.json            # Dependencies & Scripts
└── vite.config.js          # Vite configuration
```

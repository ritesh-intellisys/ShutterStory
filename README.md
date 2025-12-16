# BittuC - Wedding & Event Photography Website

A modern, responsive React website for BittuC Photography Services, showcasing wedding and event photography services.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 📸 Gallery with category filtering
- 📝 Contact form
- 💼 Services showcase
- 📊 Statistics and about section

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Styling with modern features

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
BittuC/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #d4af37;
  --secondary-color: #2c2c2c;
  --accent-color: #f5f5f5;
  /* ... */
}
```

### Content

- Update contact information in `src/components/Contact.jsx`
- Modify services in `src/components/Services.jsx`
- Replace gallery images with your own in `src/components/Gallery.jsx`
- Update about section in `src/components/About.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for BittuC Photography Services.

## Contact

For inquiries, please use the contact form on the website.


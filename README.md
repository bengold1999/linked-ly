# Linked-Ly - Ben Goldberger's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit: [https://bengold1999.github.io/linked-ly/](https://bengold1999.github.io/linked-ly/)

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/bengold1999/linked-ly.git

# Navigate to the project directory
cd linked-ly

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

1. Triggers on pushes to the `main` branch
2. Builds the project using `npm run build`
3. Deploys the `dist` folder to GitHub Pages

### Manual Deployment

If you need to deploy manually:

```bash
# Build the project
npm run build

# The dist folder will be created with the built files
# Upload the contents of dist/ to your hosting provider
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── effects/        # Animation and visual effects
│   ├── layout/         # Layout components (Header, Footer)
│   ├── sections/       # Page sections (Hero, About, Projects, etc.)
│   └── ui/            # shadcn/ui components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── pages/              # Page components
```

## 🔧 Configuration

- **Vite Config**: Configured with base path `/linked-ly/` for GitHub Pages
- **Tailwind**: Custom configuration with animations and typography
- **TypeScript**: Strict configuration for type safety

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ben Goldberger** - Full-Stack Developer
- Portfolio: [https://bengold1999.github.io/linked-ly/](https://bengold1999.github.io/linked-ly/)
- GitHub: [@bengold1999](https://github.com/bengold1999)

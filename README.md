# Modern Todo App with Authentication

A beautiful and functional todo application built with React, TypeScript, and Tailwind CSS. Features a notebook-style interface with customizable backgrounds and secure authentication.

![App Screenshot](https://images.unsplash.com/photo-1544273677-c433136021d4)

## Features

- 🔐 Secure authentication system
- 📝 Intuitive todo list management
- 🎨 Customizable background images
- 💫 Smooth animations and transitions
- 🎯 Clean and focused user interface
- 📱 Fully responsive design

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Deployment:** Netlify

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Usage

1. **Authentication:**
   - Enter your username and password to access the todo list
   - Simple authentication for demo purposes

2. **Todo Management:**
   - Add new todos with the input field
   - Toggle todo completion with the checkbox
   - Delete todos with the remove button
   - Todos persist during the session

3. **Customization:**
   - Change the background image by entering a new URL
   - Supports any valid image URL from Unsplash

## Project Structure

```
src/
├── components/
│   ├── AuthForm.tsx    # Authentication component
│   └── TodoList.tsx    # Todo list management
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Live Demo

Visit the live application at: [https://dreamy-longma-388759.netlify.app](https://dreamy-longma-388759.netlify.app)

## Acknowledgments

- Background images provided by [Unsplash](https://unsplash.com)
- Icons by [Lucide](https://lucide.dev)
# App Portfolio

This is a personal portfolio application built with Next.js, React, and TypeScript.

## Project Structure

```
d:\Job Desk\Web Programming\clone\app-portfolio\
├───.gitignore
├───bun.lock
├───components.json
├───eslint.config.mjs
├───next.config.ts
├───package.json
├───postcss.config.mjs
├───tailwind.config.js
├───tsconfig.json
├───public\
│   ├───documents\
│   │   └───cv.pdf
│   ├───experiences
│   ├───icons
│   ├───profiles
│   └───projects
└───src\
    ├───app\
    │   ├───globals.css
    │   ├───layout.tsx
    │   └───page.tsx
    ├───components\
    │   ├───atoms
    │   ├───molecules
    │   └───template
    ├───data\
    │   ├───app.json
    │   ├───experience.json
    │   ├───experiences.json
    │   ├───footer.json
    │   ├───hero.json
    │   ├───menus.json
    │   ├───project.json
    │   ├───projects.json
    │   ├───socials.json
    │   ├───stack.json
    │   ├───stacks.json
    │   └───stack.json
    ├───hooks\
    │   └───theme-provider.tsx
    └───lib\
        └───utils.ts
```

## Features

*   **Interactive UI:** Built with React and Next.js, utilizing Radix UI components for a rich user experience.
*   **Animations:** Smooth transitions and animations powered by Framer Motion and GSAP.
*   **Responsive Design:** Tailored for various screen sizes using Tailwind CSS.
*   **Theme Switching:** Supports light and dark modes via `next-themes`.
*   **Dynamic Content:** Content is likely managed through JSON files (e.g., `data/projects.json`, `data/experiences.json`).
*   **3D Graphics (Potential):** Integration with Ogl suggests potential for WebGL or 3D elements.
*   **Carousel/Slider:** Uses Swiper for interactive content display.

## Tech Stack

*   **Framework:** Next.js 15
*   **Language:** TypeScript 5
*   **UI Library:** React 19
*   **Styling:** Tailwind CSS 4, clsx, tailwind-merge
*   **Animations:** Framer Motion, GSAP
*   **UI Components:** Radix UI
*   **Icons:** Lucide React, React Icons
*   **Carousel:** Swiper
*   **3D Graphics:** Ogl
*   **Theme Management:** next-themes
*   **Package Manager:** Bun

## Prerequisites

Before you begin, ensure you have met the following requirements:

*   Node.js (LTS version recommended)
*   Bun package manager

## Installation

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/app-portfolio.git
    cd app-portfolio
    ```
2.  **Install dependencies:**
    ```bash
    bun install
    ```
3.  **Run the development server:**
    ```bash
    bun run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4.  **Build for production:**
    ```bash
    bun run build
    ```
5.  **Start production server:**
    ```bash
    bun run start
    ```

## API Endpoints

This application does not expose any dedicated API endpoints. It primarily functions as a static portfolio site, potentially consuming data from local JSON files or external services.

## Environment Variables

This project does not explicitly use `.env` files for configuration. All necessary configurations are likely handled within the code or through build-time processes.

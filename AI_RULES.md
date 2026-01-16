# AI Development Rules for CHAMA FOOD PARK

This document outlines the tech stack and development guidelines for the CHAMA FOOD PARK application. Following these rules ensures consistency and maintainability.

## Tech Stack

- **Framework:** React with TypeScript for building the user interface.
- **Build Tool:** Vite for fast development and optimized builds.
- **Styling:** Tailwind CSS is used for all styling, configured via a CDN in `index.html`.
- **State Management:** Local component state is managed with React Hooks (`useState`, `useMemo`, `useEffect`).
- **Icons:** Font Awesome is used for all icons, included via a CDN.
- **Fonts:** Custom typography is handled by Google Fonts (Oswald and Inter).
- **Data:** The menu and other constant data are stored statically in `constants.tsx`.

## Library and Component Rules

- **Styling:**
    - **Primary:** Use Tailwind CSS utility classes for all styling needs.
    - **Custom CSS:** Avoid writing custom CSS. The existing `<style>` block in `index.html` is for global theme definitions only.

- **Icons:**
    - Use Font Awesome icons by adding the appropriate classes to `<i>` elements (e.g., `<i className="fa-solid fa-fire"></i>`). Do not install any icon-related React packages.

- **Components:**
    - All new components must be created in their own file inside the `src/components/` directory.
    - Components should be small, reusable, and focused on a single responsibility.

- **State Management:**
    - Stick to React's built-in state management hooks. Do not add external libraries like Redux or Zustand unless the application's complexity demands it.

- **Types:**
    - All shared TypeScript types and enums must be defined in `types.ts`.

- **Code Structure:**
    - Keep all source code within the `src/` directory.
    - Static data is located in `constants.tsx`.
    - The main application component is `App.tsx`.
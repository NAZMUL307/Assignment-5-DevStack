# Assignment-5: Dev Stack

A responsive React + TypeScript technology library where users can search/filter technologies and build a personal stack.

## Features

- Sticky responsive navbar with mobile menu
- Hero section and gradient call-to-action
- 15 technologies loaded from `src/data/technologies.json`
- Search by technology name, description, or category
- Category filtering
- Add technologies to Your Stack, prevent duplicates, remove one, or clear all
- React Toastify success/info alerts
- Loading state on the Explore button
- Responsive layout and shared orange → pink → violet gradient
- Footer and project call-to-action

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

Check production build:

```bash
npm run build
```

## Project structure

```text
src/
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Stack.tsx
│   └── TechnologyCard.tsx
├── data/
│   └── technologies.json
├── types/
│   └── technology.ts
├── App.tsx
├── index.css
└── main.tsx
```

## React questions and answers

### 1. What is JSX?
JSX is a syntax extension that lets us write HTML-like markup inside JavaScript or TypeScript. React uses it to describe what the UI should display.

### 2. What are components in React?
Components are reusable UI building blocks. A component can contain markup, logic, and styles and can be used in different parts of an application.

### 3. What is the difference between props and state?
Props are values passed from a parent component to a child component. State is data managed inside a component that can change over time and trigger a re-render.

### 4. What is the useState hook?
`useState` lets a function component store and update state. It returns the current value and a setter function.

### 5. What is the useEffect hook?
`useEffect` runs side-effect logic after rendering, such as subscriptions, timers, or synchronizing with external systems. It was not needed for the main stack state in this project.

### 6. Why do we use keys when rendering lists?
Keys help React identify which list items changed, were added, or were removed. A stable unique ID is preferred over an array index.

### 7. What is TypeScript and why use it with React?
TypeScript adds static types to JavaScript. It helps catch type errors early, documents expected data shapes, and makes component props and application data easier to maintain.

## Suggested Git commit plan

1. `chore: set up React TypeScript project`
2. `feat: add technology data and TypeScript types`
3. `feat: build responsive navbar and hero`
4. `feat: render technology cards with search and filters`
5. `feat: add selected technologies stack`
6. `feat: add remove actions and toast notifications`
7. `style: polish responsive layout and footer`
8. `docs: add project README and React Q&A`

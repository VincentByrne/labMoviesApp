# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# Movies app
React application for browsing, reviewing and searching for movies. Ues the TMDB API. Built with React TypeScript and Vite. 

# Functionality 
*Browse movies*: Browse and discover the latest movies. 
*Review details*: View information about each movie including runtime, review score, and genre. 
*Favourites*: ability to tag and track your favourite movies. 
*Must Watch*: Create a playlist of upcoming movies. 
*Filtering*: Filter movies by title and genre.

# Pages
*Home Page*: Browse and discover movies on the landing page. 
*Movie Details Page*: Review specific information on each movie
*Favorites Page*: View and manage your favorite movies
*Upcoming Movies Page*: View movies that are soon to be released. 
*Popular Movies Page**: Browse movies that are currently popular
*Top Rated Movies Page*: View highest rated movies on TMDB
*Add Review Page**: Write reviews for movies that you have added to your favourites list. 

## Technical Stack
- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Query** for server state management and caching
- **React Router** for navigation
- **Material UI** for component styling
- **React Hook Form** for form handling
- **Context API** for global state management
- **Storybook** for component documentation

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
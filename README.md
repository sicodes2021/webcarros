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
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



### Projeto ###

# npm create vite@latest
# npm install

## https://tailwindcss.com/docs/guides/vite
# npm install -D tailwindcss postcss autoprefixer

# npx tailwindcss init -p

# content: [
#    "./index.html",
#    "./src/**/*.{js,ts,jsx,tsx}",
#  ],

#  @tailwind base;
#  @tailwind components;
#  @tailwind utilities;

## https://reactrouter.com/en/main/start/tutorial
# npm install react-router-dom
# npm install localforage match-sorter sort-by

# npm install react-icons

## https://react-hook-form.com/get-started
# npm install react-hook-form
# npm install @hookform/resolvers
# npm install zod

## https://console.firebase.google.com/
# npm install firebase

# npm install uuid
# npm install @types/uuid --save-dev
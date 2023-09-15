Please check the snapshots below.
![Screenshot (282)](https://github.com/shreyasbabshet-coditas/weather-app-react/assets/137038792/2e38d76e-4f43-477d-9e8b-3329ea7837bc)
![Screenshot (283)](https://github.com/shreyasbabshet-coditas/weather-app-react/assets/137038792/3e337048-9f36-4eb8-8980-9cd0a1265a88)
![Screenshot (284)](https://github.com/shreyasbabshet-coditas/weather-app-react/assets/137038792/a82f5c99-c215-4b64-84e4-4d4d98a07f4e)
![Screenshot (285)](https://github.com/shreyasbabshet-coditas/weather-app-react/assets/137038792/eef0494b-635f-49ff-af45-3b371b3fc8dd)
![Screenshot (286)](https://github.com/shreyasbabshet-coditas/weather-app-react/assets/137038792/b1bc2c80-fb1f-4708-8cee-a9337e70d3d2)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

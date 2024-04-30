# React + TypeScript + Vite

## Color Pallete

```
    /* Primary: Blue Martina */
    --primary-100: #F2FDFF;
    --primary-200: #BDF6FE;
    --primary-300: #87F2F9;
    --primary-400: #4FEAEC;
    --primary-500: #1BD1C8;
    --primary-600: #09A695;
    --primary-700: #027C67;
    --primary-800: #00513F;
    --primary-900: #00261B;

    /* Accent: Ryoku-Ou-Shoku Yellow */
    --accent-100: #FDFFF2;
    --accent-200: #F6FEBC;
    --accent-300: #F2FA84;
    --accent-400: #EBED4C;
    --accent-500: #D4CA17;
    --accent-600: #A89708;
    --accent-700: #7D6802;
    --accent-800: #523F00;
    --accent-900: #261B00;

    /* Neutral */
    --neutral-100: #FAFCFC;
    --neutral-200: #E6EAEA;
    --neutral-300: #D2D7D7;
    --neutral-400: #BFC5C5;
    --neutral-500: #ABB3B2;
    --neutral-600: #888F8E;
    --neutral-700: #656C6B;
    --neutral-800: #434947;
    --neutral-900: #222625;

```

## set up

```
brew install lefthook
```

## Deploy

```
bun run predeploy
bun run deploy
```

## Site

[here](https://k70suk3-k06a7ash1.github.io/voyage/)
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
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# voyage-react

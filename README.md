# gaming-shop-frontend

The Gaming Shop web UI — talks to the `Gaming-Shop` backend API.

## Stack (what each tool is for)

- **SvelteKit** + **`@sveltejs/adapter-node`** — the app framework; adapter-node
  builds it as a Node server (runs in a container on the Pi).
- **Vite** — dev server + bundler.
- **TypeScript** — typed components/data.
- **Sass** + **`axlothecook-sass-library`** — styling; pulls shared
  styles/mixins from the project's own Sass library (GitHub dependency).

Backend URL is baked in at build time via the `LINK` arg (inside the Compose
network the backend is `http://backend:3000`). Deploy details: see the
`gaming-shop-deploy` repo.

---

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.13.0 create --template minimal --types ts --install npm ./
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

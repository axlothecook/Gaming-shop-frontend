# ---- Stage 1: BUILD ----
# Full Node image with the whole toolchain. This stage compiles the
# SvelteKit app; nothing here reaches the final image except what
# stage 2 explicitly copies out.
FROM node:22-slim AS build

WORKDIR /app

# Manifests first — layer-caching trick: if only source changes,
# Docker reuses the cached "npm ci" layer below.
COPY package.json package-lock.json ./

# Install ALL dependencies (incl. devDependencies) — the build needs
# Vite, the Svelte compiler, the SCSS compiler, etc.
RUN npm ci

# Copy the rest of the source (.dockerignore excludes node_modules,
# build, .svelte-kit, .env, .git).
COPY . .

# `LINK` is read via $env/static/private, so SvelteKit bakes its value
# into the build output at BUILD time — it must be supplied here.
# ARG = a build-time variable; ENV makes it visible to `npm run build`.
ARG LINK
ENV LINK=$LINK

# Compile the SvelteKit app → produces /app/build (adapter-node output).
RUN npm run build

# ---- Stage 2: RUN ----
# A fresh, clean image. None of stage 1's build tools come along —
# only what we explicitly COPY --from=build below.
FROM node:22-slim AS run

WORKDIR /app

# Install ONLY production dependencies — the running server doesn't
# need Vite/compilers. This is the official adapter-node pattern.
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy just the compiled output from stage 1.
COPY --from=build /app/build ./build

# adapter-node's server listens on port 3000 by default.
EXPOSE 3000

# Run the compiled SvelteKit server (NOT vite, NOT npm run dev).
CMD ["node", "build"]

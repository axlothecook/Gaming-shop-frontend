# Gaming shop frontend
The front end of the Gaming Shop, built with SvelteKit and rendered on the server. It never exposes the Express backend to the internet as pages and forms talk to it server-to-server inside the Docker network.
<br />
<br />

## Features
<ul> 
	<li>browse games, genres and developers with pagination</li> 
	<li>filter games by name, rating, genre, developer and price, and sort the results</li> 
	<li>search across the shop</li> 
	<li>create, edit and delete games, genres and developers</li> 
	<li>creation and edit forms for games, genres and developers include image upload and swapping</li>
</ul>

### Missing features
There is no account creation or shopping cart. This might be questionable as they are a standard part of any ecommerce shop. This is an ecommerce demo with a deliberately small scope. I wanted to finish it and move on to other projects, so accounts, cart and login didn't make the cut. The CRUD is open to every visitor on purpose.
<br />
<br />

## How it talks to the backend
The graph demonstrates the flow of how frontend and backend communicate requests and responses, with a possibility of failures. Basically the Cloudflare Tunnel sends visitors straight to the SvelteKit server. Pages render there, and forms submit there too via form actions. The frontend server then calls the backend over the private Docker network; the backend address is baked in at build time and never reaches the browser. The backend and the database have no public address at all.

![image](https://github.com/user-attachments/assets/914003d1-1da3-4571-9296-aa40508072ca)
<br />
<br />

## Testing and deployment
The server load functions that deliver backend data to the pages are covered by 9 unit tests. The right backend URLs get called, filters come back marked correctly, and backend errors map to the right behavior (error page for server failures, inline errors for invalid searches). They run in CI together with the type check before every deploy; if any fail, nothing gets deployed. This project implements an early version of the deployment pipeline of [homelab-ci-cd](https://github.com/axlothecook/homelab-ci-cd).
<br />
<br />

## Tech stack
[SvelteKit](https://svelte.dev/docs/kit) + [adapter-node](https://svelte.dev/docs/kit/adapter-node): the app framework, built into a Node server that runs in a container on the Pi <br />
[TypeScript](https://www.typescriptlang.org): typed components and data <br />
[Vite](https://vite.dev): dev server and bundler <br />
[Vitest](https://vitest.dev): test runner for the loader tests <br />
[Sass](https://sass-lang.com) + [axlothecook-sass-library](https://github.com/axlothecook/axlothecook-sass-library): styling, with shared styles and mixins from my own Sass library
<br />
<br />

## Related repositories
[Back end](https://github.com/axlothecook/Gaming-Shop): Express + MongoDB API <br />
[Deploy](https://github.com/axlothecook/gaming-shop-deploy): the Docker Compose stack that runs everything on my Raspberry Pi <br />
[CI/CD pipeline](https://github.com/axlothecook/homelab-ci-cd): how every push gets built and deployed <br />
[Umbrella](https://github.com/axlothecook/gameshop): A joint repo for all Gaming Shop related repositories
<br />
<br />

## Demo photos
### Landing homepage
![image](https://github.com/user-attachments/assets/9e060c40-4ded-411b-97f9-bb22b74af75b)
<br />

### Games roster
![image](https://github.com/user-attachments/assets/0263cde1-2970-4879-8a4c-00640c354181)
<br />

### Gaming genres
![image](https://github.com/user-attachments/assets/a17494b4-4dbd-4d5d-9031-4928ee94d9ef)
<br />

### Individual game page example
![image](https://github.com/user-attachments/assets/2ab90d71-6d7d-45fb-8a41-9904491e783c)
<br />


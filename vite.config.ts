import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	// Unit tests for the server load functions (vitest reads this `test` block).
	// Node environment: the loaders run on the server, no DOM needed.
	test: {
		environment: 'node',
		include: ['src/**/*.test.ts']
	}
});

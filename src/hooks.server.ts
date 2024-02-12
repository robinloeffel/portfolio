import type { Handle } from "@sveltejs/kit";

// tell sveltekit to preload inter
export const handle: Handle = async({ event, resolve }) => await resolve(event, {
	preload: ({ type, path }) => type === "font" && path.includes("inter-latin-wght-normal")
});

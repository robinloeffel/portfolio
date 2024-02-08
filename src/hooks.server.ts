import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async({ event, resolve }) => {
	const lang = event.url.pathname.startsWith("/de") ? "de-ch" : "en-us";

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace("%sveltekit.lang%", lang)
	});
};

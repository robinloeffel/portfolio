import { dev } from "$app/environment";
import type { Handle } from "@sveltejs/kit";
import { minify, type Options } from "html-minifier-terser";

const minifyOptions: Options = dev
	? {}
	: {
		collapseBooleanAttributes: true,
		collapseWhitespace: true,
		minifyCSS: true,
		minifyJS: true,
		minifyURLs: true,
		removeAttributeQuotes: true,
		removeComments: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
		sortAttributes: true,
		sortClassName: true
	};

export const handle: Handle = async({ event, resolve }) => await resolve(event, {
	preload: ({ type, path }) => type === "font" && path.includes("inter"),
	transformPageChunk: async({ html }) => minify(html, minifyOptions)
});

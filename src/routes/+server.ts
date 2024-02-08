import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({ request }) => {
	const acceptLanguage = request.headers.get("accept-language")?.split(",")[0]?.split("-")[0];
	const path = acceptLanguage === "de" ? "/de" : "/en";

	// eslint-disable-next-line unicorn/no-null
	return new Response(null, {
		headers: {
			refresh: `0; url=${path}`
		}
	});
};

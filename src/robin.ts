if (import.meta.env.PROD) {
	const { inject } = await import("@vercel/analytics");
	inject();
}

import "./ts/image-loader";
import "./ts/animation-stop";
import "./ts/obfustaced";

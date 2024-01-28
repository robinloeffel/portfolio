if (process.env.NODE_ENV === "production") {
	const { inject } = await import("@vercel/analytics");
	inject();
}

import "./ts/image-loader";
import "./ts/animation-stop";
import "./ts/obfustaced";

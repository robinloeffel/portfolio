if (process.env.NODE_ENV === "production") {
	const [
		{ injectSpeedInsights },
		{ inject }
	] = await Promise.all([
		import("@vercel/speed-insights"),
		import("@vercel/analytics")
	]);

	injectSpeedInsights();
	inject();
}

import "./ts/image-loader";
import "./ts/animation-stop";
import "./ts/obfustaced";

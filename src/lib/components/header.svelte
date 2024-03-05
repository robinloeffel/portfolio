<header class="header">
	<h1 class="title">Robin Löffel</h1>
</header>

<style lang="scss">
	@use "$styles/variables";

	.header {
		font-size: variables.$font-size-h1;
	}

	.title {
		color: transparent;
		background-image:
			linear-gradient(
				to right,
				variables.$color-coral,
				variables.$color-orange,
				variables.$color-malibu
			);
		background-clip: text;
		animation: hue-rotate 10s linear infinite alternate;
	}

	@keyframes hue-rotate {
		to {
			filter: hue-rotate(1turn);
		}
	}
</style>

<header class="page-hero">
	<h1 class="title">robin löffel</h1>
	<p class="caption">
		<span>senior frontend engineer at</span>
		<a href="https://deptagency.com">dept</a>
	</p>
	<p>
		<a href="mailto:hi@robinloeffel.ch" class="link">email</a>
		<a href="https://linkedin.com/in/robinloeffel" class="link">linkedin</a>
		<a href="https://github.com/robinloeffel" class="link">github</a>
	</p>
</header>

<style lang="scss">
	@use "$lib/styles/variables";

	.page-hero {
		display: grid;
		grid-column: 1 / -1;
		gap: variables.$space-gutter;
		justify-items: center;
		text-align: center;
	}

	.title {
		font-size: variables.$font-size-h1;
		font-weight: variables.$font-weight-extra-bold;
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

	.caption {
		font-size: variables.$font-size-h2;
	}

	.link {
		font-size: variables.$font-size-h3;
	}

	@keyframes hue-rotate {
		to {
			filter: hue-rotate(1turn);
		}
	}
</style>

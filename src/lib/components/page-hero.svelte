<script lang="ts">
	export let caption: string;
</script>

<header class="page-hero">
	<h1 class="title">robin löffel</h1>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<p class="caption">{@html caption}</p>
	<div>
		<a href="mailto:hi@robinloeffel.ch" class="link">email</a>
		<a href="https://linkedin.com/in/robinloeffel" class="link">linkedin</a>
		<a href="https://github.com/robinloeffel" class="link">github</a>
	</div>
</header>

<style lang="scss">
	@use "$styles/variables";

	.page-hero {
		display: grid;
		grid-column: 1 / -1;
		gap: variables.$space-gutter;
		text-align: center;
	}

	.title {
		font-size: variables.$font-size-h1;
		font-weight: variables.$font-weight-extra-bold;
		color: variables.$color-black;
	}

	.caption {
		font-size: variables.$font-size-h2;
	}

	.link {
		font-size: variables.$font-size-h3;
		color: variables.$color-grey-light;
	}
</style>

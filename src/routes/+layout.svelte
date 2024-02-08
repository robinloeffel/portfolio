<script lang="ts">
	import "$styles/base.scss";
	import "@fontsource-variable/inter";
</script>

<main class="grid">
	<slot />
</main>

<style lang="scss">
	@use "../scss/variables";

	.grid {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		gap: variables.$space-padding variables.$space-gutter;
		width: min(100%, 1440px);
		padding: variables.$space-padding;
	}
</style>

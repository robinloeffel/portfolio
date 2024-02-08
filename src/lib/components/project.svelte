<script lang="ts">
	export let title: string;
	export let url: string;
	export let role: string;
	export let date: string;
	export let image: string;
</script>

<article class="project">
	<a href={url} class="project-link">
		<img src={image} alt="" aria-hidden="true">
	</a>
</article>

<style lang="scss">
	@use "../../scss/variables";

	.project {
		display: grid;
		grid-column: span 4;
	}

	.project-link {
		display: block;
		aspect-ratio: 1;
	}
</style>

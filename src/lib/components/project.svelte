<script lang="ts">
	export let title: string;
	export let url: string;
	export let role: string;
	export let date: string;
	export let image: string;
</script>

<article class="project">
	<a href={url} class="project-link">
		<img src={image} alt="" aria-hidden="true" class="project-image">
		<h2 class="project-title">{title}</h2>
		<span class="project-role">{role}</span>
		<span class="project-date">{date}</span>
	</a>
</article>

<style lang="scss">
	@use "$styles/variables";

	.project {
		display: grid;
		grid-column: span 4;
	}

	.project-link {
		display: grid;
		overflow: hidden;
		text-decoration: none;
		isolation: isolate;

		> * {
			grid-row: 1 / 1;
			grid-column: 1 / 1;
			text-align: center;
		}
	}

	.project-image {
		width: 100%;
		height: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		transition:
			scale 0.5s ease-in-out,
			opacity 0.5s ease-in-out,
			filter 0.5s ease-in-out;

		.project-link:hover &,
		.project-link:focus-within & {
			filter: blur(10px);
			opacity: 0.1;
			scale: 1.05;
		}
	}

	.project-title {
		place-self: center;
		font-size: variables.$font-size-new-h2;
		font-weight: variables.$font-weight-extra-bold;
	}

	.project-role {
		place-self: start center;
		margin-top: 20%;
		font-size: variables.$font-size-h3;
	}

	.project-date {
		place-self: end center;
		margin-bottom: 20%;
		font-size: variables.$font-size-h3;
	}

	.project-title,
	.project-role,
	.project-date {
		z-index: 1;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;

		.project:hover &,
		.project:focus-within & {
			opacity: 1;
		}
	}
</style>
